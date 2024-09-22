import React from 'react';

function TourComponent({content}) {
    return (
        <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    );
}

export default TourComponent;