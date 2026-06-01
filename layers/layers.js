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
var lyr_Kubur2602_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kubur-2602<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kubur2602_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11343487.972168, 319804.696712, 11343647.689264, 319931.759084]
        })
    });
var format_Seksyen_3 = new ol.format.GeoJSON();
var features_Seksyen_3 = format_Seksyen_3.readFeatures(json_Seksyen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seksyen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seksyen_3.addFeatures(features_Seksyen_3);
var lyr_Seksyen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seksyen_3, 
                style: style_Seksyen_3,
                popuplayertitle: 'Seksyen',
                interactive: true,
                title: '<img src="styles/legend/Seksyen_3.png" /> Seksyen'
            });
var format_Kemudahan_4 = new ol.format.GeoJSON();
var features_Kemudahan_4 = format_Kemudahan_4.readFeatures(json_Kemudahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kemudahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kemudahan_4.addFeatures(features_Kemudahan_4);
var lyr_Kemudahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kemudahan_4, 
                style: style_Kemudahan_4,
                popuplayertitle: 'Kemudahan',
                interactive: true,
                title: '<img src="styles/legend/Kemudahan_4.png" /> Kemudahan'
            });
var format_Asnaf_5 = new ol.format.GeoJSON();
var features_Asnaf_5 = format_Asnaf_5.readFeatures(json_Asnaf_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asnaf_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asnaf_5.addFeatures(features_Asnaf_5);
var lyr_Asnaf_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asnaf_5, 
                style: style_Asnaf_5,
                popuplayertitle: 'Asnaf',
                interactive: true,
                title: '<img src="styles/legend/Asnaf_5.png" /> Asnaf'
            });
var format_Kubur_6 = new ol.format.GeoJSON();
var features_Kubur_6 = format_Kubur_6.readFeatures(json_Kubur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kubur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kubur_6.addFeatures(features_Kubur_6);
var lyr_Kubur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kubur_6, 
                style: style_Kubur_6,
                popuplayertitle: 'Kubur',
                interactive: true,
                title: '<img src="styles/legend/Kubur_6.png" /> Kubur'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MstPlan_1.setVisible(true);lyr_Kubur2602_2.setVisible(true);lyr_Seksyen_3.setVisible(true);lyr_Kemudahan_4.setVisible(true);lyr_Asnaf_5.setVisible(true);lyr_Kubur_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MstPlan_1,lyr_Kubur2602_2,lyr_Seksyen_3,lyr_Kemudahan_4,lyr_Asnaf_5,lyr_Kubur_6];
lyr_Seksyen_3.set('fieldAliases', {'Seksyen': 'Seksyen', 'BilLot': 'BilLot', });
lyr_Kemudahan_4.set('fieldAliases', {'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_Asnaf_5.set('fieldAliases', {'BIL': 'BIL', 'KOD': 'KOD', 'NAMA': 'NAMA', 'NO.KAD PEN': 'NO.KAD PEN', 'NO.TELEFON': 'NO.TELEFON', 'ALAMAT': 'ALAMAT', 'QARIAH': 'QARIAH', 'CATATAN': 'CATATAN', });
lyr_Kubur_6.set('fieldAliases', {'NoPtk': 'NoPtk', 'NmArwah': 'NmArwah', 'TrkKbumi': 'TrkKbumi', });
lyr_Seksyen_3.set('fieldImages', {'Seksyen': 'TextEdit', 'BilLot': 'TextEdit', });
lyr_Kemudahan_4.set('fieldImages', {'Nama': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Asnaf_5.set('fieldImages', {'BIL': 'TextEdit', 'KOD': 'TextEdit', 'NAMA': 'TextEdit', 'NO.KAD PEN': 'TextEdit', 'NO.TELEFON': 'TextEdit', 'ALAMAT': 'TextEdit', 'QARIAH': 'TextEdit', 'CATATAN': 'TextEdit', });
lyr_Kubur_6.set('fieldImages', {'NoPtk': 'TextEdit', 'NmArwah': 'TextEdit', 'TrkKbumi': 'DateTime', });
lyr_Seksyen_3.set('fieldLabels', {'Seksyen': 'inline label - visible with data', 'BilLot': 'hidden field', });
lyr_Kemudahan_4.set('fieldLabels', {'Nama': 'inline label - always visible', 'Jenis': 'inline label - always visible', });
lyr_Asnaf_5.set('fieldLabels', {'BIL': 'hidden field', 'KOD': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'NO.KAD PEN': 'hidden field', 'NO.TELEFON': 'hidden field', 'ALAMAT': 'hidden field', 'QARIAH': 'hidden field', 'CATATAN': 'hidden field', });
lyr_Kubur_6.set('fieldLabels', {'NoPtk': 'inline label - always visible', 'NmArwah': 'inline label - always visible', 'TrkKbumi': 'inline label - always visible', });
lyr_Kubur_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});