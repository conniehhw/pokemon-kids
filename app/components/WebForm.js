"use client";
import styles from "../components/components.module.css";

// Component function: Render a webform to enable ability to receive emails submitted (used api.web3forms.com)

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8732bf94-cad7-4568-807b-28b80f637022",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <h5>
        I hope this website was helpful! If you have any questions or feedback,
        feel free to use this form. I look forward to hearing from you.
      </h5>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <ul className={styles.alignMe}>
            <li>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required placeholder="Your name" />
            </li>
            <br></br>

            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
              />
            </li>
            <br></br>

            <li>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                rows="3"
                placeholder="Enter Message"
              ></textarea>
            </li>
            <br></br>
            <li>
              <label></label>
              <button type="submit" className={styles.b}>
                Submit
              </button>
            </li>
            <br></br>
            <li>
              <label></label>
              <button type="reset" value="clear" className={styles.bClear}>
                Clear
              </button>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
}
