import ContactContent from '../components/contactContent'

export default function Contact(){
    return (
      <div>
        <div>
            <h3>So you want to connect?</h3>
            <p>We'll I will be more than delighted to connect with you! Down below is my contact information
                and social media handles. The quickest way to contact me is through email as I usually respond
                within 24 hours.
            </p>
        </div>
        <div>
            <h5>Email: <p>ngn.scott@gmail.com</p></h5>
            <h5 href="https://github.com/nguyensc">Github</h5>
            <h5>Phone Number: +1(616)780-7123</h5>
            <h5 href="https://linkedin.com/scottnguyen96">Linkedin</h5>
            <h5 href={Resume}>Resume</h5>
        </div>
        <div>
          <h3>I hope to hear from you soon!</h3>
        </div>
    </div>
  );
}