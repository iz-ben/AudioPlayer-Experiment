/**
 * @package   Audio Manager
 * @author    Ben <ben@coterie.co.ke>
 * @link      http://coterie.co.ke
 */
 
goog.provide('co.ke.coterie.audio.Sound');


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {co.ke.coterie.audio.Manager} audioManager
 * @param {string} source_url The url from where the audio will be played
 * @param {string} title The title of the current sound
 
 * This class will basically create and 
 * manage an instance of web audio and use it to play html5 audio
*/
co.ke.coterie.audio.Sound = function( audioManager, source_url, title )
{
	this.audioManager = audioManager;
	
	this.setVolume();
	
	this.setTitle( title );
	
	this.streamUrl = new goog.Uri( source_url );
}

/**
 * @type {co.ke.coterie.audio.Manager} Stores a reference to the audio manager instance
 * that created the sound
 */
co.ke.coterie.audio.Sound.prototype.audioManager;

/**
 * By default this will take the value provided by its audioManager
 * @return {number}
 */
co.ke.coterie.audio.Sound.prototype.volume_ = 0;

/**
 * @type {string}
 */
co.ke.coterie.audio.Sound.prototype.title_ = '';

/**
 * @type {goog.Uri}
 */
co.ke.coterie.audio.Sound.prototype.streamUrl;

/**
 * @param {number} volume
 */
co.ke.coterie.audio.Sound.prototype.setVolume = function()
{
	this.volume_ = this.audioManager.getVolume();
}

/**
 * @return {number}
 */
co.ke.coterie.audio.Sound.prototype.getVolume = function()
{
	return this.volume_;
}

/**
 * @param {string} title
 */
co.ke.coterie.audio.Sound.prototype.setTitle = function( title )
{
	this.title_ = title;
}

/**
 * @return {string}
 */
co.ke.coterie.audio.Sound.prototype.getTitle = function()
{
	return this.title_;
}