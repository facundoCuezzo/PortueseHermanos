import React from 'react';

const GoogleMaps = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1928323750767!2d-65.23850192489003!3d-26.83381838991138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c62304b7983%3A0xf266ef9835c336f4!2sElasticos%20Portuese%20Hnos%20Srl!5e0!3m2!1ses!2sar!4v1733833539829!5m2!1ses!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleMaps;
