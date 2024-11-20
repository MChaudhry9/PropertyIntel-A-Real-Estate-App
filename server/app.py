from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

NYC_DATASET_URL = "https://data.cityofnewyork.us/resource/eabe-havv.json"
# APP_TOKEN = "YOUR_APP_TOKEN_HERE"  # Optional:add API token for higher rate limits.

def fetch_paginated_data(query_params, max_records=50000, chunk_size=1000):
    """Fetch large dataset using pagination."""
    # headers = {"X-App-Token": APP_TOKEN} if APP_TOKEN else {}
    all_data = []
    offset = 0

    while True:
        # Add pagination parameters
        query_params.update({"$limit": chunk_size, "$offset": offset})
        response = requests.get(NYC_DATASET_URL, params=query_params) # , headers=headers
        response.raise_for_status()

        data = response.json()
        if not data:  # Break if no more data is returned
            break

        all_data.extend(data)
        offset += chunk_size

        # Stop if we hit the max_records limit
        if len(all_data) >= max_records:
            break
    
    return all_data

@app.route("/api/complaints", methods=["GET"])
def get_complaints():
    
    """API endpoint to fetch complaints based on user input."""
    address = request.args.get("address")
    zip_code = request.args.get("zip_code")
    bin_number = request.args.get("bin_number")

    query_params = {}

    if address:
        # Split the address into house number and street name
        parts = address.split(" ", 1)
        if len(parts) == 2:
            query_params["house_number"] = parts[0]
            query_params["house_street"] = parts[1].upper()
        else:
            # Return an error if the address format is invalid
            return jsonify({"error": "Please enter a valid address with house number and street name."}), 400
    # if zip_code:
    #     query_params["zip_code"] = zip_code

    if zip_code:
        if not zip_code.isdigit() or len(zip_code) != 5:
            return jsonify({"error": "Enter a valid 5-digit zip code."}), 400
        query_params["zip_code"] = zip_code

    if bin_number:
        if not bin_number.isdigit() or len(bin_number) != 7:
            return jsonify({"error": "Enter a valid 7-digit BIN number."}), 400
        query_params["bin"] = bin_number


    try:
        # Fetch all paginated data
        data = fetch_paginated_data(query_params)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)