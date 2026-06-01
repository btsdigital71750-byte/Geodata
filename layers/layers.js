var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_MstPlan_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MstPlan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MstPlan_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11341717.953721, 318950.592622, 11347730.811562, 322329.498404]
        })
    });
var format_Seksyen_2 = new ol.format.GeoJSON();
var features_Seksyen_2 = format_Seksyen_2.readFeatures(json_Seksyen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seksyen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seksyen_2.addFeatures(features_Seksyen_2);
var lyr_Seksyen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seksyen_2, 
                style: style_Seksyen_2,
                popuplayertitle: 'Seksyen',
                interactive: true,
                title: '<img src="styles/legend/Seksyen_2.png" /> Seksyen'
            });
var format_Kemudahan_3 = new ol.format.GeoJSON();
var features_Kemudahan_3 = format_Kemudahan_3.readFeatures(json_Kemudahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kemudahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kemudahan_3.addFeatures(features_Kemudahan_3);
var lyr_Kemudahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kemudahan_3, 
                style: style_Kemudahan_3,
                popuplayertitle: 'Kemudahan',
                interactive: true,
                title: '<img src="styles/legend/Kemudahan_3.png" /> Kemudahan'
            });
var format_Asnaf_4 = new ol.format.GeoJSON();
var features_Asnaf_4 = format_Asnaf_4.readFeatures(json_Asnaf_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asnaf_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asnaf_4.addFeatures(features_Asnaf_4);
var lyr_Asnaf_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asnaf_4, 
                style: style_Asnaf_4,
                popuplayertitle: 'Asnaf',
                interactive: true,
                title: '<img src="styles/legend/Asnaf_4.png" /> Asnaf'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MstPlan_1.setVisible(true);lyr_Seksyen_2.setVisible(true);lyr_Kemudahan_3.setVisible(true);lyr_Asnaf_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MstPlan_1,lyr_Seksyen_2,lyr_Kemudahan_3,lyr_Asnaf_4];
lyr_Seksyen_2.set('fieldAliases', {'Seksyen': 'Seksyen', 'BilLot': 'BilLot', });
lyr_Kemudahan_3.set('fieldAliases', {'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_Asnaf_4.set('fieldAliases', {'BIL': 'BIL', 'KOD': 'KOD', 'NAMA': 'NAMA', 'NO.KAD PEN': 'NO.KAD PEN', 'NO.TELEFON': 'NO.TELEFON', 'ALAMAT': 'ALAMAT', 'QARIAH': 'QARIAH', 'CATATAN': 'CATATAN', });
lyr_Seksyen_2.set('fieldImages', {'Seksyen': 'TextEdit', 'BilLot': 'TextEdit', });
lyr_Kemudahan_3.set('fieldImages', {'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Asnaf_4.set('fieldImages', {'BIL': 'TextEdit', 'KOD': 'TextEdit', 'NAMA': 'TextEdit', 'NO.KAD PEN': 'TextEdit', 'NO.TELEFON': 'TextEdit', 'ALAMAT': 'TextEdit', 'QARIAH': 'TextEdit', 'CATATAN': 'TextEdit', });
lyr_Seksyen_2.set('fieldLabels', {'Seksyen': 'inline label - visible with data', 'BilLot': 'hidden field', });
lyr_Kemudahan_3.set('fieldLabels', {'Nama': 'inline label - always visible', 'Jenis': 'inline label - always visible', });
lyr_Asnaf_4.set('fieldLabels', {'BIL': 'hidden field', 'KOD': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'NO.KAD PEN': 'hidden field', 'NO.TELEFON': 'hidden field', 'ALAMAT': 'hidden field', 'QARIAH': 'hidden field', 'CATATAN': 'hidden field', });
lyr_Asnaf_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});