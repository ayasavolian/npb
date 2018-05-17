import random
import string


def uuid_generator():
    first_hash = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(8))
    second_hash = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(16))
    third_hash = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(16))
    fourth_hash = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(8))
    return first_hash + "-" + second_hash + "-" + third_hash + "-" + fourth_hash
