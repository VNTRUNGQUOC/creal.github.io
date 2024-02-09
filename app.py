import os
from flask import Flask, render_template, request, jsonify, session
import google.generativeai as genai

app = Flask(__name__)
app.secret_key = 'your_secret_key'  

api_key = os.environ.get('GOOGLE_API_KEY') 
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-pro") 

@app.route('/')
def index():
    session['chat_history'] = session.get('chat_history', []) 
    return render_template('index.html', chat_history=session['chat_history'])

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form['message']
    if not user_input:
        return jsonify({'error': 'Please enter a message'})

    try:
        response = model.generate(user_input)
        session['chat_history'].append({'user': user_input, 'bot': response})
        return jsonify({'response': response})
    except genai.exceptions.ApiError as err:
        return jsonify({'error': f'API Error: {err}'})

if __name__ == '__main__':
    app.run(debug=True)
