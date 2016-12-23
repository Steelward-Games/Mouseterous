cc.Class({
    "extends": cc.Component,

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
        quickPlayButton: {
            "default": null,
            type: cc.Node
        },
        campaignButton: {
            "default": null,
            type: cc.Node
        },
        battleButton: {
            "default": null,
            type: cc.Node
        },
        coOpButton: {
            "default": null,
            type: cc.Node
        },
        hotSeatButton: {
            "default": null,
            type: cc.Node
        },
        quickPlayOpacity: 0,
        campaignOpacity: 0,
        battleOpacity: 0,
        coOpOpacity: 0,
        hotSeatOpacity: 0
    },

    setOpacity: function setOpacity() {
        this.quickPlayButton.opacity = this.quickPlayOpacity;
        this.campaignButton.opacity = this.campaignOpacity;
        this.battleButton.opacity = this.battleOpacity;
        this.coOpButton.opacity = this.coOpOpacity;
        this.hotSeatButton.opacity = this.hotSeatOpacity;
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.setOpacity();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    singleplayerClick: function singleplayerClick() {
        this.quickPlayOpacity = 255;
        this.campaignOpacity = 255;
        this.battleOpacity = 0;
        this.coOpOpacity = 0, this.hotSeatOpacity = 0, this.setOpacity();
    },

    multiplayerClick: function multiplayerClick() {
        this.quickPlayOpacity = 0;
        this.campaignOpacity = 0;
        this.battleOpacity = 255;
        this.coOpOpacity = 255, this.hotSeatOpacity = 255, this.setOpacity();
    }
});