var size = 0;
var ranges_Batang_Kec = [[7418.000000, 172977.800000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[172977.800000, 338537.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(199,220,239,1.0)'})
    })]],
[338537.600000, 504097.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(114,178,215,1.0)'})
    })]],
[504097.400000, 669657.200000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,120,184,1.0)'})
    })]],
[669657.200000, 835217.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_Batang_Kec={}
var style_Batang_Kec = function(feature, resolution){
    var value = feature.get("JUMLAHAN");
    var style = ranges_Batang_Kec[0][2];
    for (i = 0; i < ranges_Batang_Kec.length; i++){
        var range = ranges_Batang_Kec[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if (feature.get("FIRST_KECA") !== null) {
        var labelText = String(feature.get("FIRST_KECA"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Batang_Kec[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 1
              }),
            });
        styleCache_Batang_Kec[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Batang_Kec[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};