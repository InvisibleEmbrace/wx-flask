from flask import Blueprint

router_api = Blueprint('api_page', __name__)


@router_api.route("/")
def index():
    return "api"
