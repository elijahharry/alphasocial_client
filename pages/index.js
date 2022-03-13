import * as api from "@lib/twitter";

import MainWrap from "@component/MainWrap/MainWrap";
import Feature from "@component/Feature/Feature";
import Tweets from "@component/Tweets/Tweets";
import CaseStudies from "@component/CaseStudies/CaseStudies";
import CTA from "@component/CTA/CTA";

export default function Index({ tweets, accounts }) {
  return (
    <MainWrap>
      <Feature
        overline="Investing and entrepreneurship brand builders"
        title={
          <>
            We Build <span>Content Businesses</span>
          </>
        }
        media={{
          background: {
            src: "socialmedia-people.jpg",
            blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABwMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EAB8QAAEDBAMBAAAAAAAAAAAAAAIBAwUABAYSCBMUI//EABQBAQAAAAAAAAAAAAAAAAAAAAb/xAAcEQEAAQQDAAAAAAAAAAAAAAABAwAEIjERQbH/2gAMAwEAAhEDEQA/ALtnzy5MyOSW8AzMYiyjeTSsJcOrAmfb5wuHgIU700DXQEBVI/kCq4Sqe6lKOTXUymTqlFvbQg4m+zn2v//Z",
          },
        }}
        top={true}
        dark={true}
        overlay={{ color: "primary_darker", opacity: 0.9 }}
        color="secondary-light"
        centered={true}
        desc="We've built a social media <strong>following of over 400,000</strong> in the <strong>finance space</strong>. We can do the same for your brand."
        shadow={true}
        id="home-hero"
        button1={{ link: "#about", text: "Learn more" }}
        button2={{ link: "/contact", text: "Contact" }}
      />
      <CTA
        text="We work as equity partners or consultants to build powerful content-powered businesses."
        link="#creds"
        remove_at={1050}
      />
      <Feature
        color="primary"
        overline="Company overview"
        title={
          <>
            What <span>We Do</span>
          </>
        }
        desc="We acquire stakes in businesses that could benefit from a content strategy, build out the content engine, and then hold the companies for the long-term."
        // border="bottom"
        flipped={true}
        media={{ float: "people-on-phones.png" }}
        icons={true}
        shadow={true}
        id="about"
        button1={{ link: "#services", text: "Services" }}
      />
      <Feature
        media={{
          stacked: [
            {
              src: "john.jpg",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACf/EAB0QAAICAwADAAAAAAAAAAAAAAEDAgQABQcGESL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQADAQAAAAAAAAAAAAAAAAEAESEC/9oADAMBAAIRAxEAPwCgGh4zwzZ3N4ufE/CS6lsih1l2kqvdbYUqbJzWTWZzZIt+pSMpSI9kknGMZTjkOWy2f//Z",
            },
            {
              src: "stonk.jpg",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EAB4QAAIBBAMBAAAAAAAAAAAAAAIDAQAEBQYIESFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALMyHAPi1lnzdZXTNkvXEbWSy43vYGFJMabWT2V7M9kxjDKfpGRT7MzSlKD/2Q==",
            },
            {
              src: "alpha-investors.jpg",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EAB8QAAICAgEFAAAAAAAAAAAAAAECAwQABQgGERIVIf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACERJR/9oADAMBAAIRAxEAPwC6KvDjj4tdPddEtvLzd3s7DZXp3nszMS0krBXWNC7lnKRIkYLHxRR8xjGTpXkAAwT/2Q==",
            },
            {
              src: "eloise.jpg",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACf/EAB4QAAICAgMBAQAAAAAAAAAAAAECAwQABQYHESEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAxRSkf/aAAwDAQACEQMRAD8AojT6G631qyxaetyDVQTTPO1bWcp2tOuHc+sVhhsKiD0/iqAB4B8GMYwY7NBgSyHbHSv/2Q==",
            },
            {
              src: "volatility-alerts.jpg",
              blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACf/EAB4QAAICAgIDAAAAAAAAAAAAAAIDAQUABBESBgcU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABgRAAMBAQAAAAAAAAAAAAAAAAASUQEC/9oADAMBAAIRAxEAPwCknjfrmqqKhVZZCvdLWI1IaLNqC+eCmEiwnPaxrRX0g2kfLCgj4Ht1hjGJtoU5h//Z",
            },
          ],
        }}
        color="secondary"
        overline="Our success stories"
        title={
          <>
            Our <span>Portfolio</span>
          </>
        }
        desc="We’re building several content businesses, from newsletters to SaaS businesses. Interested in pitching us on an idea? Fill out the contact form below."
        overlay={{ color: "grey", opacity: 1 }}
        shadow={true}
        id="creds"
        button1={{ link: "/contact", text: "Contact us" }}
      />
      <CaseStudies />
      <Feature
        color="secondary"
        overline="What we help with"
        title={
          <>
            Our <span>Specialties</span>
          </>
        }
        desc="Branding, memes with viral potential, hysterical content & more. We're experts at all things that encompass building an audience within the finance space."
        overlay={{ color: "grey", opacity: 1 }}
        flipped={true}
        shadow={true}
        services={true}
        id="services"
        button1={{ link: "/contact", text: "Contact us" }}
      />
      {tweets.length > 0 && <Tweets tweets={tweets} accounts={accounts} />}
    </MainWrap>
  );
}

export async function getStaticProps() {
  const { tweets: tweets, accounts: accounts } = await api.getTopTweets();
  // const tweets = [];
  // const accounts = [];

  return {
    revalidate: 600,
    props: { tweets: tweets ? tweets : [], accounts: accounts ? accounts : [] },
  };
}
