cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        tilePrefab: {
            default: null,
            type: cc.Prefab
        },
        x0 : -420,
        y0 : -320,
    },

    // use this for initialization
    onLoad: function () {
        this.loadJson();
        this.createMap();
    },
    loadJson: function(){
    var url = cc.url.raw( 'resources/map/Map1.json' );  
    var myJSON = cc.loader.load(url);
    cc.log(JSON.stringify(myJSON));
    },
    createMap: function(){
        var url = cc.url.raw( 'resources/map/Map1.json' );
        cc.loader.load( url, function( err, res)
        {
            cc.log(cc.director.getScene());
            cc.log(res.width);
            var tileIDs = [];
            for(var exKey in res.tilesets[0].tiles){
                tileIDs.push(res.tilesets[0].tiles[exKey].image);
            }
            
            for(var i = res.height -1; i  >= 0; i--){
                for(var j = res.width -1; j >= 0; j--){
                    var newTile = cc.instantiate(cc.director.getScene().tilePrefab);
                    cc.director.getScene().addChild(newTile);
                    cc.director.getScene().updateTilePosition(i,j,newTile);
                }
            }
        });

    },
    updateTilePosition: function(xPos, yPos, tile) {
        tile.setPosition(cc.p(xPos*100 + this.x0, yPos*100 + this.y0));
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
