const Logos: React.FC = () => {
    return (
      <section id="logos" className="py-32 px-5 bg-background">
        <p className="text-lg font-medium text-center">
          We've worked with <span className="text-secondary">these</span>{" "}
          customers and architects
        </p>
        <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
          <b>AC Consortium Architects</b>
          <b>K2LD Architects</b>
          <b>ar + d Architects</b>
          <b>Mandarin Oriental Hotel</b>
          <b>Mtech Consultant</b>
          <b>Celavi Restaurant</b>
        </div>
      </section>
    );
}

export default Logos