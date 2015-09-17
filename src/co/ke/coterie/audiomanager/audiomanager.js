/**
 * @package   Audio Manager
 * @author    Ben <ben@coterie.co.ke>
 * @link      http://coterie.co.ke
 * Based on scottschiller's SoundManager2
 * https://github.com/scottschiller/SoundManager2
 */
 
goog.provide('co.ke.coterie.audio.Manager');


goog.require('goog.events.Event');
goog.require('goog.events.EventType');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
*/
co.ke.coterie.audio.Manager = function()
{
	goog.events.EventTarget.call(this);
}
goog.inherits( co.ke.coterie.audio.Manager, goog.events.EventType );

/**
 * @enum {string}
 */
co.ke.coterie.audio.Manager.EventType = {
	ERROR: goog.events.getUniqueId('error'),
	PAUSE: goog.events.getUniqueId('pause'),
	PLAY: goog.events.getUniqueId('play'),
	PLAYLISTCHANGE:goog.events.getUniqueId('playlistchange'),
	READY: goog.events.getUniqueId('ready'),
	RESUME: goog.events.getUniqueId('resume'),
	STOP: goog.events.getUniqueId('stop'),
	VOLUMECHANGE:goog.events.getUniqueId('volumechange')
}


/**
 * @type {boolean}
 * @private
 */
co.ke.coterie.audio.Manager.prototype.ready_ = false;

/**
 * @type {boolean}
 * @private
 */
co.ke.coterie.audio.Manager.prototype.playing_ = false;

/**
 * @type {number}
 * @private
 * Volume will range between 0 and 100
 * Default volume is 50
 */
co.ke.coterie.audio.Manager.prototype.volume_ = 50;

/**
 * @return {number}
 */
co.ke.coterie.audio.Manager.prototype.getVolume = function()
{
	return this.volume_;
}

/**
 * @return {boolean}
 */
co.ke.coterie.audio.Manager.prototype.isReady = function()
{
	return this.ready_;
}

/**
 * @return {boolean}
 */
co.ke.coterie.audio.Manager.prototype.isPlaying = function()
{
	return this.playing_;
}


/**
 * @param {number} volume
 * Dispatches co.ke.coterie.audio.Manager.EventType.VOLUMECHANGE event
 */
co.ke.coterie.audio.Manager.prototype.setVolume = function( volume )
{
	this.volume_ = volume >= 0 || volume <=100 ? volume : this.volume_ ;
	
	this.dispatchEvent( co.ke.coterie.audio.Manager.EventType.VOLUMECHANGE );
}