import random
from faker import Faker
from datetime import datetime
import uuid

faker = Faker()

response_codes = ["200", "404", "500", "301"]
verbs = ["GET", "POST", "DELETE", "PUT"]
resources = ["/list", "/wp-content", "/wp-admin", "/explore", "/search/tag/list", "/app/main/posts", "/posts/posts/explore", "/apps/cart.jsp?appID="]
ualist = [faker.firefox, faker.chrome, faker.safari, faker.internet_explorer, faker.opera]

def generate_log():
    ip = faker.ipv4()
    user_identifier = ""
    userid = ""
    time_local = datetime.now().strftime('%d/%b/%Y:%H:%M:%S')
    request_line = f"\"{random.choice(verbs)} {random.choice(resources)} HTTP/1.1\""
    status = random.choice(response_codes)
    body_bytes_sent = random.randint(50, 2000)
    http_referer = ""
    http_user_agent = f"\"{random.choice(ualist)()}\""

    log = f"{ip} - {user_identifier} - {userid} - [{time_local}] - {request_line} - {status} - {body_bytes_sent} - {http_referer} - {http_user_agent}"
    return log

for _ in range(200):
    print(generate_log())
