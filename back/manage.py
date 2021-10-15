from app import app, db
import controllers.recipe
import getopt, sys

if __name__ == '__main__':
    optlist, args = getopt.getopt(sys.argv[1:], "")
    if args[0] == "run":
        app.run(host="0.0.0.0", port=8000)
    if args[0] == "migrate":
        db.create_all()