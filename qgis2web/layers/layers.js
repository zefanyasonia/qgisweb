var format_Batang_Kec = new ol.format.GeoJSON();
var features_Batang_Kec = format_Batang_Kec.readFeatures(geojson_Batang_Kec, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batang_Kec = new ol.source.Vector();
jsonSource_Batang_Kec.addFeatures(features_Batang_Kec);var lyr_Batang_Kec = new ol.layer.Vector({
                source:jsonSource_Batang_Kec, 
                style: style_Batang_Kec,
                title: "Batang_Kec"
            });

lyr_Batang_Kec.setVisible(true);
var layersList = [lyr_Batang_Kec];
lyr_Batang_Kec.set('fieldAliases', {'KODE_KEC': 'KODE_KEC', 'FIRST_KECA': 'FIRST_KECA', 'FIRST_KABU': 'FIRST_KABU', 'FIRST_PROP': 'FIRST_PROP', 'JUMLAHAN': 'JUMLAHAN', });
lyr_Batang_Kec.set('fieldImages', {'KODE_KEC': 'TextEdit', 'FIRST_KECA': 'TextEdit', 'FIRST_KABU': 'TextEdit', 'FIRST_PROP': 'TextEdit', 'JUMLAHAN': 'TextEdit', });
lyr_Batang_Kec.set('fieldLabels', {'KODE_KEC': 'inline label', 'FIRST_KECA': 'inline label', 'FIRST_KABU': 'inline label', 'FIRST_PROP': 'inline label', 'JUMLAHAN': 'inline label', });
lyr_Batang_Kec.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});