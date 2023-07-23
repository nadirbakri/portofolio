import styles from '@/styles/Home.module.css';

const Contact = () => {
  return (
    <section className='min-vh-100 bg-dark text-white'>
      <div className='container'>
        <h1 className={`${styles.playfair} text-center`}>Contact Me</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Enter your Name</label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Enter your Name Email</label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">Enter your Message</label>
            <div className="form-floating">
              <textarea className="form-control" id="textarea" style={{ height: "200px" }}></textarea>
            </div>
          </div>
          <div className='d-grid gap-2'>
            <button type="submit" className="mt-3 btn btn-light btn-block">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
