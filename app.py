from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

tasks = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/add_task", methods=["POST"])
def add_task():
    title = request.form.get("title")
    description = request.form.get("description")
    tasks.append({"title": title, "description": description})
    return jsonify({"message": "Task added successfully"})

if __name__ == "__main__":
    app.run(debug=True)
