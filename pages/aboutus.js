import { MainLayout } from "../components/MainLayout";
import Head from "next/head";

export default function aboutus() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainLayout>
        <div className="aboutus-wrapper">
          <div className="aboutus-wrapper-inner">
            <div className="aboutus-label">Lorem ipsum creation timelines</div>
            <div className="aboutus-text">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De
              <br />
              Finibus in order to provide placeholder text to mockup various
              fonts for a type specimen book.
              <br />
              <br />
              It's difficult to find examples of lorem ipsum in use before
              Letraset made it popular as a dummy text in the 1960s, although
              McClintock says he
              <br />
              remembers coming across the lorem ipsum passage in a book of old
              metal type samples. So far he hasn't relocated where he once saw
              the
              <br />
              passage, but the popularity of Cicero in the 15th century supports
              the theory that the filler text has been used for centuries.
              <br />
              <br />
              And anyways, as Cecil Adams reasoned, “[Do you really] think
              graphic arts supply houses were hiring classics scholars in the
              1960s?” Perhaps.
              <br />
              But it seems reasonable to imagine that there was a version in use
              far before the age of Letraset.
              <br />
              <br />
              McClintock wrote to Before & After to explain his discovery;
              <br />
              “What I find remarkable is that this text has been the industry's
              standard dummy text ever since some printer in the 1500s took a
              galley of type
              <br />
              and scrambled it to make a type specimen book; it has survived not
              only four centuries of letter-by-letter resetting but even the
              leap into
              <br />
              electronic typesetting, essentially unchanged except for an
              occasional 'ing' or 'y' thrown in. It's ironic that when the
              then-understood Latin
              <br />
              was scrambled, it became as incomprehensible as Greek; the phrase
              'it's Greek to me' and 'greeking' have common semantic roots!”
              (The
              <br />
              editors published his letter in a correction headlined “Lorem
              Oopsum”).
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
