import React from 'react';
import ReduxUtils from '../utils/redux_utils';
import Thumbnail from './thumbnail';
import ElementUtils from '../utils/element_utils';
import Helpers from './viewer-helpers';

const tilesData = [
    {
      img: 'res/medical-render.png',
      title: 'MRI-Scanner',
      key: '0001',
      urn:'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6amFpbWVfcm9vbV9jb25maWd1cmF0b3JfcmV2aXRpby9NUkklMjBzY2FubmVyLmlwdA'
    }
  ];

class Gallery extends React.Component {

  onTileSelect(tile, e) {
    e.preventDefault();
    console.log("Launching "+ tile.title +" model");
    Helpers.loadNextModel(tile.urn);
  }
   
  render () {
    return (
      <div id='side-bar'>
        <div className="forge-gallery gallery">
            <div className="container">
                <div className="row">
                    {tilesData.map((tile, index) =>
                    (
                        <div className="col col-sm-6 tile" key={index}>
                        <a href="#" onClick={this.onTileSelect.bind(this, tile)}>
                            <img className="tile-avatar" src={tile.img} alt={tile.title} />
                        </a>
                        <div className="tile-title">{tile.title}</div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>        
        <Thumbnail />
      </div>
    );
  };
};

let mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

export default ReduxUtils.connect(mapStateToProps, true)(Gallery);