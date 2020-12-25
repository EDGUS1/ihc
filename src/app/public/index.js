$(document).ready(function() {
    $('#data').DataTable( {
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json"
        },
        "lengthChange":false,
        "order": [],
        "pageLength": 5
    } );
} );
/* sticky menu */

window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); 
})

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29zdiIsImEiOiJja2liNHF2bWkwNjlyMnFsYWVtbXo3cGI5In0.oTCXFk1EXHOjTjMSdu6ZzQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-77.02824,-12.04318],
    zoom: 4

});