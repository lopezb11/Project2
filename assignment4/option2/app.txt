
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/converter', methods=['POST'])
def converter():
    if request.method == 'POST':
        fahrenheit = float(request.form['fahrenheit'])
        celsius = (fahrenheit - 32) * (5/9)
        css_file = request.form.get('css_file', 'style.css')  # Correct the form field name
        return render_template('result.html', fahrenheit=fahrenheit, celsius=celsius, css_file=css_file)

if __name__ == '__main__':
    app.run(debug=True)
