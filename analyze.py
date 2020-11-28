from geopy.distance import geodesic
from geopy.geocoders import ArcGIS
import csv
import datetime

name = []
addresses = []
csv_path = "lite.csv"
geolocator = ArcGIS()


def csv_reader(file_obj):
    reader = csv.DictReader(file_obj, delimiter=';')
    for row in reader:
        name.append(row['name'])
        addresses.append(row['address'])
    return {"name": name, "address": addresses}


#geolocator = Nominatim(user_agent="my-app")

def countDistance(point):
    with open(csv_path, "r") as file:
        dict = csv_reader(file)
    location = geolocator.geocode(dict['address'])
    smallest = geodesic(point, location).miles * 1.609344  # Перевод в километры
    Fails = []

    for obj in dict['address']:
        loc = geolocator.geocode(obj)
        if loc == None:
            Fails.append(obj)
        else:
            current = geodesic(point, (loc.latitude, loc.longitude)).miles * 1.609344  # Перевод в километры
            if current < smallest:
                smallest = current
    return smallest
