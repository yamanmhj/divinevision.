from flask import Flask,jsonify,request
from flask_mail import Mail, Message
import boto3
import os
import logging
from flask_cors import CORS
from datetime import datetime
import uuid
from  flask_mail import Mail, Message
from searchmodel import user_input
import six



app = Flask(__name__)

CORS(app)
app.config['MAIL_SERVER'] = ''  # Your SMTP server
app.config['MAIL_PORT'] = 465  # Usually 465 for SSL or 587 for TLS
app.config['MAIL_USERNAME'] = ''  # Your email
app.config['MAIL_PASSWORD'] = 'tpneunbrtvbosqls'  # Your email password (or app-specific password)
app.config['MAIL_USE_TLS'] = False  # Enable if using TLS (port 587)
app.config['MAIL_USE_SSL'] = True  # Enable if using SSL (port 465)


# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb', 
    aws_access_key_id='put ur key here',  
    aws_secret_access_key='put ur key here',
    region_name='put region here'  
)
table_name = 'Divinevision'
table = dynamodb.Table(table_name)

mail = Mail()
mail.init_app(app)
def send_email(name, email, phone, support_needed, country, additional_information, current_time):
    try:
        msg = Message(
            "New Support Request for {name}",  # Subject of the email
            sender="divinevisioncare@gmail.com",  # Sender's email (your email)
            recipients=["divinevisioncare@gmail.com"]  # Your email where the info will be sent
        )

        # Email body - all form data included
        msg.body = f"""
        A new support request has been submitted with the following details:

        Name: {name}
        Email: {email}
        Phone: {phone}
        Support Needed: {support_needed}
        Country: {country}
        Additional Information: {additional_information}
        Time of Submission: {current_time}
        """

        # Send the email
        mail.send(msg)
        logging.info("Support request email sent successfully!")
    except Exception as e:
        logging.error(f"Error sending email: {str(e)}")

    


def process_form_submission(data):
    try:
        # Extract fields from the data
        name = data.get('selectedname')
        email = data.get('selectedemail')
        phone = data.get('selectedphone')
        support_needed = data.get('selectedservicetype')
        country = data.get('selectedcounty')
        additional_info = data.get('selectedadditionalinfo')
        
        # Generate unique ID and timestamp
        current_time = datetime.now()
        formatted_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
        unique_primary_key_id = str(uuid.uuid4())
        send_email(name, email, phone, support_needed, country, additional_info, current_time)

        # DynamoDB item to be inserted
        item = {
            'message_id_pk': unique_primary_key_id,  # Primary key
            'Name': name,
            'email': email,
            'phone': phone,
            'support_needed': support_needed,
            'country': country,
            'additional_information': additional_info,
            'referal_status': 'new_received',
            'timestamp': formatted_time
        }
        print("-----------",name,email)
        # Save the data to DynamoDB
        table.put_item(Item=item)

        # Log received data
        logging.info(f"Received data: {item}")
        
        # Success message
        return {"message": "Form submitted successfully!"}, 200

    except Exception as e:
        # Log and return error message
        logging.error(f"Error processing form: {str(e)}")
        return {"error": str(e)}, 500


@app.route('/submit/form', methods=['POST'])
def submit_form():
    # Ensure data is received in JSON format
    data = request.get_json()

    # Call the form processing function
    response, status_code = process_form_submission(data)
    
    # Return the appropriate response
    return jsonify(response), status_code


@app.route('/searchrequest', methods = ['POST'])
def search_request():

    data = request.get_json()
    summary = user_input(data)
    print(summary)

""





if __name__ == '__main__':
    # Enable debugging
    app.run(debug=True)
