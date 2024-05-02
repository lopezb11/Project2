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
        return render_template('altview.html', fahrenheit=fahrenheit, celsius=celsius)

if __name__ == '__main__':
    app.run(debug=True)
