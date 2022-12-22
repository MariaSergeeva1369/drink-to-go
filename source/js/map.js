const map = L.map('map')
  .setView({
    lat: 59.9684,
    lng: 30.317520
  }, 20);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/icons/decoration/main-map-pin.svg',
  iconSize: [38 ,50],
  iconAnchor: [0, 57],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  }, {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
