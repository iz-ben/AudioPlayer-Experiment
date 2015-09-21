/**
 * @package   Audio Player
 * @author    Ben <ben@coterie.co.ke>
 * @link      http://coterie.co.ke
 */
 
goog.provide('co.ke.coterie.audio.player.VolumeControl');

goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.ui.Control');
goog.require('goog.ui.Slider');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {number=} opt_volume
*/
co.ke.coterie.audio.player.VolumeControl = function( opt_volume )
{
	goog.events.EventTarget.call(this);
	
	this.setVolume( opt_volume || this.getVolume() );
}

goog.inherits( co.ke.coterie.audio.player.VolumeControl, goog.events.EventTarget );

/**
 * @enum {string}
 */
co.ke.coterie.audio.player.VolumeControl.EventType = {
	VOLUMECHANGE:goog.events.getUniqueId('volumechange')
}

/**
 * @type {number}
 */
co.ke.coterie.audio.player.VolumeControl.prototype.volume_ = 50;



/**
 * @type {goog.ui.Control}
 */
co.ke.coterie.audio.player.VolumeControl.prototype.triggerButton;

/**
 * @type {goog.ui.Control}
 */
co.ke.coterie.audio.player.VolumeControl.prototype.volumeSlider;


co.ke.coterie.audio.player.VolumeControl.prototype.getVolume = function()
{
	return this.volume_;
}

/**
 * @param {number} volume
 */
co.ke.coterie.audio.player.VolumeControl.prototype.setVolume = function( volume )
{
	this.volume_ = volume;
	
	this.dispatchEvent( co.ke.coterie.audio.player.VolumeControl.EventType.VOLUMECHANGE );
}