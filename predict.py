import sys
import pickle

if len(sys.argv) < 2:
    print("No input")
    exit()

model = pickle.load(open("spam_model.pkl","rb"))
vectorizer = pickle.load(open("vectorizer.pkl","rb"))

msg = sys.argv[1]

vec = vectorizer.transform([msg])
res = model.predict(vec)[0]

if res == 1:
    print("Spam")
else:
    print("Ham")