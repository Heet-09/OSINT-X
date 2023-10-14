from cgi import FieldStorage
from flask import Flask ,request, jsonify
from flask_restful import Api, Resource , reqparse
from features.Number import number
from features.webscrap import Links
from features.NameInfo import Nameinfo
from features.iplocator import iplocate
app = Flask(__name__)

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('file', type=FieldStorage, location='files')


class featureFilePathResource(Resource):
    def get(self,featureNo):
        args = parser.parse_args()
        uploaded_file = args['file']

class featureStringInputResource(Resource) :
    def get(self,featureNo,strInput):
        if featureNo == '1':
           return jsonify(Links(strInput))
        elif featureNo == '2':
           return jsonify(number(strInput))
        elif featureNo == '3':
           return jsonify(Nameinfo(strInput))
        elif featureNo == '4':
           return jsonify(iplocate(strInput))
        elif featureNo == '5':
           return jsonify("")
        elif featureNo == '6':
           return jsonify("")
        else:
           return jsonify("invalid input")

api.add_resource(featureFilePathResource,'/features/<int:featureNo>/upload')
api.add_resource(featureStringInputResource, '/features/<string:featureNo>/<string:strInput>', endpoint='feature_string_input_resource')



if __name__ == '__main__':
    app.run(debug=True)
