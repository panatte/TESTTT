'use client';
import React from 'react';
import '../../../convert/nice-select.css';
import '../../../convert/range-slider.min.css';
import '../../../convert/magic-check.min.css';
import '../../../convert/styles.css';
import '../../../convert/nice-select.css';
import '../../../convert/nano.min.css';


const MyComponent: React.FC = () => {
  return (
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </head>
      <body draggable={false}>
        <div id="disclaimer">
          <div id="optimized">
            <div id="emoji">🤔</div>
            <div id="opt-title">Motionity isn't optimized for mobile</div>
            <div id="opt-desc">You need to use a computer to be able to create animations with Motionity.</div>
            <a href="https://twitter.com/alyssaxuu" target="_blank" id="opt-button">Other products by the maker</a>
          </div>
          <div id="disc-overlay"></div>
        </div>
        <audio controls id="audio-thing">
          <source src="assets/audio.wav" type="audio/wav" />
        </audio>
        <input type="file" id="filepick" accept="image/*,video/*,audio/*" multiple />
        <input type="file" id="filepick2" accept="audio/*" />
        <input type="file" id="filepick3" accept="application/json" />
        <input type="file" id="import" style={{ display: 'none' }} accept=".json" aria-hidden="true" />
        <div id="upload-popup">
          <div id="upload-popup-container">
            <div id="upload-popup-header">
              <div id="upload-popup-title">Upload media</div>
              <img id="upload-popup-close" src="assets/close.svg" />
            </div>
            <div id="upload-drop-area">
              <div id="upload-drop-group">
                <img src="assets/upload.svg" />
                <div id="upload-drop-title">Click to upload</div>
                <div id="upload-drop-subtitle">Or drag and drop a file</div>
              </div>
            </div>
            <div id="upload-link">
              <input id="upload-link-input" placeholder="Paste an image of video URL" />
              <div id="upload-link-add">Add</div>
            </div>
          </div>
          <div id="upload-overlay"></div>
        </div>
        <div id="download-modal">
          <p className="header">Download settings</p>
          <p className="subheader">Formats</p>
          <div id="radio">
            <input className="magic-radio" type="radio" name="radio" id="gif-format" value="gif" checked />
            <label htmlFor="gif-format">gif video <span>(fastest)</span></label>
            <input className="magic-radio" type="radio" name="radio" value="mp4" id="mp4-format" />
            <label htmlFor="mp4-format">MP4 video</label>
            <input className="magic-radio" type="radio" name="radio" value="gif" id="gif-format" />
            <label htmlFor="gif-format">Animated GIF</label>
            <input className="magic-radio" type="radio" name="radio" value="image" id="image-format" />
            <label htmlFor="image-format">Image</label>
          </div>
          <div id="download-real">Download</div>
        </div>
        <div id="import-export-modal">
          <p className="header">Import & export</p>
          <p className="subtitle">Save this project locally, or load an existing one.</p>
          <p className="header-2">Import a project</p>
          <div id="import-project"><img src="assets/import.svg" /> <span>Import</span></div>
          <p className="header-2">Export this project</p>
          <div id="export-project"><img src="assets/download-icon.svg" /> <span>Export</span></div>
        </div>
        <div id="background-overlay"></div>
        <div id="color-picker"></div>
        <div id="color-picker-fill"></div>
        <div id="toolbar" className="noselect">
          <div id="logo"><img src="assets/logo.svg" /></div>
          <div id="tool-wrap">
            <div className="tool" id="upload-tool"><img src="assets/uploads.svg" /><p>Uploads</p></div>
            <div className="tool tool-active" id="shape-tool"><img src="assets/shape-active.svg" /><p>Objects</p></div>
            <div className="tool" id="image-tool"><img src="assets/image.svg" /><p>Images</p></div>
            <div className="tool" id="text-tool"><img src="assets/text.svg" /><p>Text</p></div>
            <div className="tool" id="video-tool"><img src="assets/video.svg" /><p>Videos</p></div>
            <div className="tool" id="audio-tool"><img src="assets/audio.svg" /><p>Audio</p></div>
            <div className="tool" id="more-tool"><img src="assets/more-hoz.svg" /><p>More</p></div>
          </div>
        </div>
        <div id="more-over">
          <div id="upload-lottie">
            <img src="assets/upload-grey.svg" /> Upload Lottie
          </div>						
          <div id="clear-project">
            <img src="assets/clear.svg" /> Clear project
          </div>
        </div>
        <div id="behind-browser"></div>
        <div id="browser">
          <div id="browser-container">
            <div id="search-fixed"><p className="property-title">Objects</p><img id="collapse" src="assets/collapse.svg" /><div id="browser-search"><input placeholder="Search..." /><img src="assets/search.svg" id="search-icon" /><img src="assets/delete.svg" id="delete-search" /><div id="search-button">Go</div></div></div><div id="shapes-cont"><p className="row-title">Shapes</p><div className="gallery-row" id="shapes-row"></div><p className="row-title">Emojis</p><div className="gallery-row" id="emojis-row"></div></div>
          </div>
        </div>
        <div id="properties">
          <div id="properties-overlay"></div>
          <div id="align" className="align-off">
            <div id="align-v">
              <img className="align" id="align-top" src="assets/align-top.svg" title="Align to the top" />
              <img className="align" id="align-center-v" src="assets/align-center-v.svg" title="Align to the center" />
              <img className="align" id="align-bottom" src="assets/align-bottom.svg" title="Align to the bottom" />
            </div>
            <div id="align-h">
              <img className="align" id="align-left" src="assets/align-left.svg" title="Align to the left" />
              <img className="align" id="align-center-h" src="assets/align-center-h.svg" title="Align to the center" />
              <img className="align" id="align-right" src="assets/align-right.svg" title="Align to the right" />
            </div>
          </div>
          <hr />
          <div id="object-specific">
            <div id="canvas-properties" className="panel-section">
              <p className="property-title">Canvas settings</p>
              <table>
                <tr>
                  <th className="name-col">Preset</th>
                  <th className="value-col"><select id="preset"><option>Dribbble shot</option><option>Facebook post</option></select></th>
                </tr>
                <tr>
                  <th className="name-col">Size</th>
                  <th className="value-col"><div id="canvas-w" className="property-input" data-label="W"><input min={1} type="number" value={1000} /></div><div id="canvas-h" className="property-input" data-label="H"><input type="number" value={1000} min={1} /></div></th>
                </tr>
                <tr>
                  <th className="name-col">Color</th>
                  <th className="value-col">
                    <div id="canvas-color">
                      <div id="color-side" className="color-picker"></div>
                      <input value="#FFFFFF" disabled="disabled" />
                    </div>
                    <div id="canvas-color-opacity" className="property-input" data-label="%"><input type="number" value={100} /></div>
                  </th>
                </tr>
                <tr>
                  <th className="name-col">Duration</th>
                  <th className="value-col" id="duration-cell"><div id="canvas-duration" className="property-input" data-label="s"><input type="number" value={15.00} /></div></th>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div id="canvas-area">
          <div id="filters-parent">
            <div id="filters">
              <div id="filters-container">
                <div id="filters-header">
                  <div id="filters-title">Filters</div>
                  <img src="assets/close.svg" id="filters-close" />
                </div>
                <select id="filters-list">
                  <option value="none">No filter</option>
                  <option value="Invert">Invert</option>
                  <option value="Sepia">Sepia</option>
                  <option value="BlackWhite">Black & white</option>
                  <option value="Brownie">Retro</option>
                  <option value="Vintage">Vintage</option>
                  <option value="Technicolor">Technicolor</option>
                  <option value="Kodachrome">Kodachrome</option>
                  <option value="Polaroid">Polaroid</option>
                </select>
                <hr />
                <div id="filters-title">Adjustments</div>
                <div id="reset-filters"><img src="assets/repeat.svg" /> Reset</div>
                <div className="filter-row">
                  <th className="name-col">Brightness</th>
                  <th className="value-col">
                    <div id="filter-brightness" className="select-filter"></div>
                  </th>
                </div>
                <div className="filter-row">
                  <th className="name-col">Contrast</th>
                  <th className="value-col">
                    <div id="filter-contrast" className="select-filter"></div>
                  </th>
                </div>
                <div className="filter-row">
                  <th className="name-col">Saturation</th>
                  <th className="value-col">
                    <div id="filter-saturation" className="select-filter"></div>
                  </th>
                </div>
                <div className="filter-row">
                  <th className="name-col">Vibrance</th>
                  <th className="value-col">
                    <div id="filter-vibrance" className="select-filter"></div>
                  </th>
                </div>
                <div className="filter-row">
                  <th className="name-col">Hue</th>
                  <th className="value-col">
                    <div id="filter-hue" className="select-filter"></div>
                  </th>
                </div>
                <hr />
                <div id="filters-title">Chroma key</div>
                <div className="filter-row">
                  <th className="name-col">Status</th>
                  <th className="value-col">
                    <div id="status-toggle">
                      <div id="status-on" className="status-trigger">On</div>
                      <div id="status-off" className="status-trigger status-active">Off</div>
                    </div>
                  </th>
                </div>
                <div className="filter-row" id="filter-color">
                  <th className="name-col">Color</th>
                  <th className="value-col">
                    <div id="chroma-color">
                      <div id="color-chroma-side" className="color-picker"></div>
                      <input value="#FFFFFF" disabled="disabled" />
                    </div>
                  </th>
                </div>
                <div className="filter-row">
                  <th className="name-col">Distance</th>
                  <th className="value-col">
                    <div id="chroma-distance" className="select-filter"></div>
                  </th>
                </div>
                <hr />
                <div id="filters-title">Stylize</div>
                <div className="filter-row">
                  <th className="name-col">Noise</th>
                  <th className="value-col">
                    <div id="filter-noise" className="select-filter"></div>
                  </th>
                </div>
                <div className="filter-row" id="blur">
                  <th className="name-col">Blur</th>
                  <th className="value-col">
                    <div id="filter-blur" className="select-filter"></div>
                  </th>
                </div>
              </div>
            </div>
          </div>
          <div id="top-canvas">
            <div id="undo"><img src="assets/undo.svg" /> Undo</div>
            <div id="redo"><img src="assets/undo.svg" /> Redo</div>
            <div id="other-controls">
              <div title="Hand tool (Space bar)" id="hand-tool">
                <img src="assets/hand-tool.svg" />
              </div>
              <div id="zoom-level" title="Canvas zoom level"><span>100%</span><img src="assets/arrow.svg" /></div>
              <div id="zoom-options" className="zoom-hidden">
                <div className="zoom-options-item" data-zoom="in">Zoom in</div>
                <div className="zoom-options-item" data-zoom="out">Zoom out</div>
                <div className="zoom-options-item" data-zoom="50">Zoom to 50%</div>
                <div className="zoom-options-item" data-zoom="100">Zoom to 100%</div>
                <div className="zoom-options-item" data-zoom="200">Zoom to 200%</div>
              </div>
            </div>
          </div>
          <div id="bottom-canvas">
            <a id="sponsor" href="https://github.com/sponsors/alyssaxuu" target="_blank"><img src="assets/sponsor.svg" /> Sponsor</a>
            <a id="alyssa-credit" href="https://twitter.com/alyssaxuu" target="_blank">Made by <span>Alyssa X</span> <img src="assets/alyssaimg.jpeg" /></a>
          </div>
          <img src="assets/replace-image.svg" id="replace-image" />
          <img src="assets/loading-image.svg" id="load-image" className="load-media" />
          <img src="assets/loading-video.svg" id="load-video" className="load-media" />
          <canvas id="canvas" />
        </div>
        <div id="timeline-handle"></div>
        <div id="bottom-area" className="noselect">
          <div id="keyframe-properties">
            <div id="easing">
              <p className="property-title">Keyframe easing</p>
              <select id="easing">
                <option value="linear">Linear</option>
                <option value="easeInQuad">Ease in</option>
                <option value="easeOutQuad">Ease out</option>
                <option value="easeinOutQuad">Ease in-out</option>
                <option value="easeOutInQuad">Ease out-in</option>
                <option value="easeInBounce">Ease in bounce</option>
                <option value="easeOutBounce">Ease out bounce</option>
                <option value="easeinOutBounce">Ease in-out bounce</option>
                <option value="easeOutInBouce">Ease out-in bounce</option>
                <option value="easeOutInBouce">Ease out-in bounce</option>
                <option value="easeInSine">Ease in sine</option>
                <option value="easeOutSine">Ease out sine</option>
                <option value="easeinOutSine">Ease in-out sine</option>
                <option value="easeOutInSine">Ease out-in sine</option>
                <option value="easeOutInSine">Ease out-in sine</option>
                <option value="easeInCubic">Ease in cubic</option>
                <option value="easeOutCubic">Ease out cubic</option>
                <option value="easeinOutCubic">Ease in-out cubic</option>
                <option value="easeOutInCubic">Ease out-in cubic</option>
                <option value="easeOutInCubic">Ease out-in cubic</option>
              </select>
            </div>
          </div>
          <div id="nothing"></div>
          <div id="layer-wrap">
            <div id="timeline">
              <div id="track">
                <div id="progress"></div>
                <div id="indicator" style={{ left: 0 }}></div>
                <div id="keyframes"></div>
              </div>
              <div id="time-wrap">
                <div id="time-line" className="noselect">
                  <div className="time">
                    <div className="second">0s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">1s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">2s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">3s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">4s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">5s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">6s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">7s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">8s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">9s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">10s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">11s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">12s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">13s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">14s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">15s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">16s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">17s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">18s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">19s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">20s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">21s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">22s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">23s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">24s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">25s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">26s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">27s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">28s</div>
                    <div className="sub-second"></div>
                  </div>
                  <div className="time">
                    <div className="second">29s</div>
                    <div className="sub-second"></div>
                  </div>
                </div>
                <div id="current-time" className="noselect">0s</div>
              </div>
            </div>
          </div>
          <div id="progress-properties">
            <div id="progress-timeline"></div>
            <div id="progress-type">
              <div className="progress-type-item" id="ease-in-out">Ease-in-out</div>
              <div className="progress-type-item" id="ease-in">Ease-in</div>
              <div className="progress-type-item" id="ease-out">Ease-out</div>
              <div className="progress-type-item" id="linear">Linear</div>
            </div>
            <div id="copy-paste">
              <img src="assets/copy.svg" />
              <img src="assets/paste.svg" />
            </div>
          </div>
        </div>
        <script src="zepto.min.js"></script>
        
        <script src="range-slider.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@simonwep/pickr"></script>
        <script src="lottie.js"></script>
        <script src="lottiefiles.js"></script>
        <script src="magic-check.min.js"></script>
        <script src="main.js"></script>
      </body>
    </html>
  );
};

export default MyComponent;