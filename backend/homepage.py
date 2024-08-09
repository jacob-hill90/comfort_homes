from flask import Blueprint, request, jsonify
from flask_mail import Mail, Message
import traceback

bp = Blueprint('homepage', __name__)
mail = Mail()

@bp.route('/send', methods=['POST'])
def send_email():
    try:
        data = request.json
        print(data)

        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        msg = Message(subject='Contact Form Submission',
                      sender='micomforthomes@gmail.com', 
                      recipients=['hilljake93@gmail.com'])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

        mail.send(msg)
        return jsonify({'success': True}), 200
    except Exception as e:
        traceback.print_exc()  # Print traceback to console
        return jsonify({'success': False, 'error': str(e)}), 500
