import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";
import Population from "./population";
import Petition from "./Petition";
import Healthcare from "./Healthcare";
import Frank from "./Frank";
import AMore from "./AMore";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    document.cookie = "";
    this.pharmacy = React.createRef();
    this.state = {
      trigger: false,
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari")
    };
    for (let i = 0; i < 201; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.work = React.createRef();
    this.carducci = React.createRef();
    this.$ = React.createRef();
    this.edu = React.createRef();
    this.ssa = React.createRef();
    this.primary = React.createRef();
    this.gas = React.createRef();
    this.depression = React.createRef();
    this.supply = React.createRef();
    this.plandemic = React.createRef();
    this.disability = React.createRef();
    this.police = React.createRef();
    this.immi = React.createRef();
  }
  componentDidMount = () => {
    //document.getElementsByTagName("body")[0].style.margin = 0;
    document.body.style.margin = 0;
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    document.body.style.margin = null;
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname !== "/") {
          this.setState({
            trigger: true,
            openFrank: !["/vote", "/carducci"].includes(this.props.pathname)
          });
        }
        if (this.props.pathname === "/work") {
          window.scroll(0, this.work.current.offsetTop);
        } else if (this.props.pathname === "/pharmacy") {
          window.scroll(0, this.pharmacy.current.offsetTop);
        } else if (this.props.pathname === "/edu") {
          window.scroll(0, this.edu.current.offsetTop);
        } else if (["/$", "/bachelors"].includes(this.props.pathname)) {
          window.scroll(0, this.$.current.offsetTop);
        } else if (
          ["/phlebotomists", "/Phlebotomists"].includes(this.props.pathname)
        ) {
          this.setState({ suggestBachelor: "Phlebotomists" }, () =>
            window.scroll(0, this.$.current.offsetTop)
          );
        } else if (this.props.pathname === "/disability") {
          window.scroll(0, this.disability.current.offsetTop);
        } else if (this.props.pathname === "/covid") {
          window.scroll(0, this.covid.current.offsetTop);
        } else if (this.props.pathname === "/ssa") {
          window.scroll(0, this.ssa.current.offsetTop);
        } else if (["/vote", "/carducci"].includes(this.props.pathname)) {
          window.scroll(0, this.carducci.current.offsetTop);
        } else if (["/supply"].includes(this.props.pathname)) {
          window.scroll(0, this.supply.current.offsetTop);
        } else if (this.props.pathname === "/depression") {
          window.scroll(0, this.depression.current.offsetTop);
        } else if (["/gas", "/oil"].includes(this.props.pathname)) {
          window.scroll(0, this.gas.current.offsetTop);
        } else if (["/plandemic"].includes(this.props.pathname)) {
          window.scroll(0, this.plandemic.current.offsetTop);
        } else if (["/nypd", "/police"].includes(this.props.pathname)) {
          window.scroll(0, this.police.current.offsetTop);
        } else if (["/immi", "/immigration"].includes(this.props.pathname)) {
          window.scroll(0, this.immi.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  }; //elated bizarre messy hair 1/hour-GDP/p

  //pass named function as body? 'bound' no name
  createNamedFunction = (name = "ok", body = function () {}) => {
    //return function names(){}
    return {
      [name]: function () {
        return body.apply(body, arguments);
      }
    }[name];
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    /*const scrollPath = (scrollPath) =>
      [this.state.hoverPath, this.state.scrollPath].includes(scrollPath)
        ? "2px solid"
        : "0px solid";
    const hoverpathe = (ev) =>
      ev.target &&
      ev.target.href &&
      this.setState({
        hoverPath: ev.target.href.split(`${window.location.origin}/`)[1]
      });*/
    const navitem = {
      fontSize:
        this.state.width < 300
          ? "10px"
          : this.state.width < 400
          ? "10px"
          : "14px",
      width: "max-content",
      cursor: "pointer",
      padding: "4px 10px",
      color: "white"
    };
    const goTo = (path) =>
      (window.location.href = `https://${window.location.hostname}/${path.target.id}`);
    const picstyle = {
      backgroundColor: "white",
      width: "20px",
      boxShadow: null
    };
    return (
      <div>
        <iframe
          style={{
            width: "calc(100% - 40px)",
            right: "0px",
            height: "400px",
            position: "relative",
            float: "right"
          }}
          title="portfolio"
          src="https://carducci.vercel.app/"
        />
        <div
          style={{
            width: "calc(100% - 40px)",
            margin: "10px",
            overflow: "hidden",
            fontFamily: "arial, sans serif",
            wordBreak: "break-word",
            textAlign: "left",
            maxWidth: "600px"
          }}
        >
          <div
            id="carducci"
            onClick={goTo}
            style={{
              color: "white",
              textAlign: "center",
              borderRadius: "30px",
              position: "fixed",
              bottom: "10px",
              right: "20px",
              width: "36px",
              padding: "10px 0px",
              backgroundColor: "green"
            }}
          >
            sign here!{space}
            <span
              style={{
                transform: "scale(-1,1)"
              }}
            >
              &#9998;
            </span>
          </div>
          Can a business legally make their products worse or prices higher in
          line with margins?
          <br />
          <a href="https://change.org/NickCarducci">change.org/NickCarducci</a>
          <a href="https://occupywall.us">
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openInfo ? "100%" : "0%"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/3h60qq7tzvrc126/Screen%20Shot%202023-03-14%20at%2012.39.12%20AM.png?raw=1"
              }
              float={null}
              title="DoD banking shill - https://www.quora.com/unanswered/Do-banks-technically-need-to-lend-deposits-to-operate"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
          </a>
          <div
            onClick={() => this.setState({ openInfo: !this.state.openInfo })}
            style={{
              cursor: "pointer",
              padding: "2px 6px",
              border: "1px solid",
              width: "min-content",
              borderRadius: "12px"
            }}
          >
            ?
          </div>
          <i
            style={{
              fontSize: this.state.openInfo ? "12px" : "0px",
              transition: ".3s ease-in"
            }}
          >
            My first time voting was in 2020 but I have been a covert economics
            (OWS, JHU) researcher with an eye for degrowth and deflation, or
            what I call material recovery. We are non-voters and our stake is
            reconciliation but for real plaintiff coverage tax falls until
            deflation (which should be immediate)!
          </i>
          <Cable
            style={{
              transition: ".3s ease-in",
              width: this.state.openInfo ? "100%" : "0%",
              maxWidth: "200px"
            }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dropbox.com/s/ij5ojj3eg48b3ip/petition%20photo.png?raw=1"
            }
            float={"right"}
            title="petition photo"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.openSynth && this.state.scrollTop}
          />
          <h2
            style={{
              fontSize: this.state.openInfo ? "" : "0px",
              transition: ".3s ease-in"
            }}
          >
            malarkey is SSDI mental-injury. SSI for{space}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() =>
                this.setState({ openTrauma: !this.state.openTrauma })
              }
            >
              trauma
            </span>
            ...
          </h2>
          <div
            style={{
              fontSize: this.state.openTrauma ? "12px" : "0px",
              transition: ".3s ease-in"
            }}
          >
            Should medical{space}
            <a href="https://saverparty.xyz">care escrow</a>
            {space}continue to be for internal and psychological ailments or
            should supplemental income be for trauma anytime while disability
            insurance be for injury during work and public healthcare for
            sutures already? Are people with cardiovascular and psychological
            issues or with musculoskeletal lacerations disabled? Aren’t the
            developmentally disabled traumatized? Why should an injured
            cash-basis hospitality worker have to work for other accrual-based
            industries when people with age-related diseases or personality
            disorders are given disability insurance? Isn’t Social Security
            ageist? Why does Social Security award young people disability for
            psychological issues when they have musculoskeletal lacerations and
            old people when presenting internal diseases that are positively
            correlated with age? Should Social Security (continue to) make
            assumptions (about employers)?
            {space}
            <a href="https://bankingisnot.biz">
              Is disability insurance or are unemployment benefits and
              employment retention credits more corrupt?
            </a>
          </div>
          <div
            style={{
              fontSize: this.state.openInfo ? "12px" : "0px",
              transition: ".3s ease-in"
            }}
          >
            In office or not, I'm advocating/making anonymous voting mechanisms
            [public id, private+vote-increment], and an anonymous account
            identity provider is past due for brokerage accounts and petitions!
            Surely in the next few years the Internet will be an intranet by GSA
            for age and non-convict verification so business can actually
            confidentially compute!
          </div>
          <hr ref={this.carducci} />
          {/*I'm not sure door to door canvassing is for a new organization by a
        youthful person. Perhaps I go to the train stations.*/}
          <br />
          <Petition />
          (coalition = priorities)
          <h2
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => this.setState({ openFrank: !this.state.openFrank })}
          >
            Tax Security, First!{space}
            <span
              style={{
                fontSize: "12px",
                color: "grey"
              }}
            >
              [Finance for (public but) deflationary universal plaintiff cop
              real income gains]
            </span>
          </h2>
          <i>
            Service escrow sutures, moving to learn to code shelters with
            computer labs, open the borders, truancy as trespass but
            inflation-affixed dependency, tax cuts for surplus and hikes after
            recession yet during its inflation part, codify past debt by factor.
            {space}
            <span style={{ color: "lightskyblue" }}>
              Why is bankruptcy allowed to cause bank runs instead of codifying
              student and government debt while liens use realty foreclosure and
              shareholder loans from limited family testamentary partnership
              protect against corporate bonds?
            </span>
            {space}https://secretary.quora.com/What-makes-a-contract-legal-1
            {space}
            Doesn’t a non-profit surrender control even though people donate
            regardless? Are closed source companies allowed to make horizontal
            parallel or concurrent vertical industry mega apps? How much as a
            percentage of either a ticket sale or subscription do marketplace
            facilitators and television programmers pay broadcasters on average,
            or do broadcasters often either sponsor a purse or even outright pay
            for channels?
          </i>
          <h3>
            Saverparty.xyz/nato{space}&bull;{space}Saverparty.xyz/poverty
          </h3>
          Does illegal immigration and crime or debt and insurance cause
          inflation? Why are{space}
          <a href="https://vau.money/login">out-of-pocket</a>
          {space}expenses tax-free?
          <Frank
            openFrank={this.state.openFrank}
            lastWidth={this.state.lastWidth}
            ref={{
              current: {
                police: this.police,
                edu: this.edu,
                gas: this.gas,
                plandemic: this.plandemic,
                work: this.work
              }
            }}
          />
          <div
            style={{
              transition: ".3s ease-in",
              fontSize: this.state.openSynth ? "" : "0px"
            }}
          >
            <div
              style={{ backgroundColor: "lightsalmon", textAlign: "center" }}
            >
              Aren't{space}
              <a href="https://facebook.com/occupynewjersey">people</a>
              {space}that obstruct{space}
              <a href="https://book.com.co">wall street</a>
              {space}from earning maligned income,
              {space}
              <a href="https://humanharvest.info">terrorists</a>?
            </div>
            <h3>
              <a href="https://nextdoor.com/pages/thumbprint-fair-haven-nj">
                Why does the government force business people to bank with
                lenders
              </a>
              ?
            </h3>
            <hr ref={this.pharmacy} />
            {this.state.width && <Healthcare width={this.state.width} />}
            I contribute open source and get paid in deflation. any weapon can
            be used of equal power. the people that cause inflation just by
            working are deadly. i think the people that need me to write this
            out are incriminating themselves for not trying. it's an argument.
            does self defense require the same weapon? is it a war crime to
            fight for the right to own? psychitric medicine doesn't change the
            alleged crime of the following: if wall street keeps causing
            inflation I will rip their throats out.
            <br />
            SELF DEFENSE. IF FLOYD CAN BE CARFACED YOU CAN TOO
            <br />
            <h3 style={{ float: "right" }}>
              <a
                href="https://account.venmo.com/u/truncatedwholesaletax" /*https://venmo.com/code?user_id=3567148823742342744"*/
              >
                Please Donate
              </a>
              <br />
              <br />
              <a href="https://venmo.com">(first, sign in)</a>
            </h3>
            How do banks secure wallets with a lost password functionality
            without having a bank identification number for each{space}
            <a href="https://vau.money">account</a>
            {space}(<i>Don't processes have the quality of success?</i>)? Do you
            even trust the Office of the Comptroller of the Currency without
            historical latches of the null, confirmed?{space}Is{space}
            <a href="https://markethistory.quora.com/Did-prohibition-stop-workplace-accidents-1">
              subjectivity
            </a>
            {space}a good characteristic for one to have? Is a fiscal deficit a
            financially responsible operation?
            <br />
            <h2>
              Nick Carucci's answer to{space}
              <a href="https://realecon.quora.com/How-do-inventions-make-human-life-better-1">
                How do inventions make human life better
              </a>
              ? in Real Economics
            </h2>
            {/*<button
          onClick={(e) => {
            e.preventDefault();
            console.log(this.createNamedFunction("ok", function () {}));
          }}
        >
          test named func
        </button>*/}
            <h4>
              Disassociation is a{space}
              <a href="https://saverparty.quora.com/Is-Chris-Murphy-correct-in-saying-mental-health-gun-restrictions-will-prevent-homicides-1">
                disability
              </a>
              {space}now?
            </h4>
            <a href="https://www.quora.com/unanswered/Why-are-people-not-allowed-to-self-harm-but-a-family-can-decide-to-mercy-kill">
              Why are people not allowed to self-harm but a family can decide to
              mercy kill
            </a>
            ?
            <br />
            <br />
            <a href="https://www.quora.com/unanswered/Is-involuntary-commitment-based-on-hearsay-evidence">
              Is involuntary commitment based on hearsay evidence
            </a>
            ?
            <br />
            <br />
            <a href="https://www.quora.com/unanswered/Why-did-I-get-involuntarily-committed-for-saying-rollover-insurance-to-a-doctor">
              Why did I get involuntarily committed for saying "rollover
              insurance" to a doctor
            </a>
            ?<br />
            <br />
            <a href="https://rolloverinsurance.quora.com/Why-is-a-bone-marrow-transplant-so-expensive">
              Why is a bone marrow transplant so expensive
            </a>
            ?
            <br />
            You should count{space}
            <a href="quora.com/How-would-politics-in-the-U-S-change-if-we-adopted-ranked-choice-voting/answer/Nick-Carducci">
              our
            </a>
            {space}
            second vote as a no for either candidate, then. This would cause the
            seat holder to only permit{space}
            <a href="quora.com/Should-non-voters-votes-count-towards-a-reconciliation-of-the-office-holder">
              reconciliation
            </a>
            .
            <h2>
              <a href="https://www.quora.com/Does-it-seem-that-many-people-advocate-for-socialism-despite-the-fact-that-government-regulations-restrictions-cause-monopolies-excessive-unnatural-inequalities-in-our-markets-not-buying-selling-in-an-open-market/answer/Nick-Carducci">
                Does it seem that many people advocate for socialism, despite
                the fact that government regulations & restrictions cause
                monopolies & excessive unnatural inequalities in our markets,
                not buying & selling in an open market without market coercions
              </a>
              ?
            </h2>
            <iframe
              title="Advanced Microeconomics: The Micro-Theory.com Podcast, Microeconomics for Macroeconomists and Laymen"
              height="315"
              width="100%"
              style={{ border: "none", minWidth: "min(100%, 430px)" }}
              scrolling="no"
              data-name="pb-iframe-player"
              src="https://www.podbean.com/player-v2/?i=erve2-dcc91c-pbblog-playlist&share=1&download=1&fonts=Arial&skin=f6f6f6&font-color=ffffff&rtl=0&logo_link=episode_page&btn-skin=3267a3&size=315"
              iframe={{
                allowTransparency: "true",
                frameBorder: "0"
                //allowFullScreen: "",
                //allow:
                //"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              }}
            ></iframe>
            <h2
              onClick={() =>
                this.setState({ openSynth: !this.state.openSynth })
              }
              style={{ fontSize: "30px", textDecoration: "underlined" }}
            >
              More Info:{space}humanharvest.info
            </h2>
            NYU business pro Scott Galloway: "We've never been able to raise
            interest rates as much as necessary to counter inflation, without
            triggering a recession."
            <h2>
              Truncated Wholesale Tax - I might have an episode on tax
              exemptions, just pay{space}
              <a href="https://www.quora.com/unanswered/Would-cops-not-be-relatively-richer-by-truncated-wholesale-tax-and-or-banning-tax-exemptions">
                cops
              </a>
              {space}less.
            </h2>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "100px" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.youtube.com/embed/kOy3I2ceTRA"
              }
              float={"left"}
              title="https://youtu.be/kOy3I2ceTRA"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "100px" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.youtube.com/embed/WnK_f8i7AQE"
              }
              float={"right"}
              title="https://youtube.com/shorts/WnK_f8i7AQE?feature=share"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <b>Why is expense good when it is incorporated</b>? Deflation less
            inflation is less employee benefits and government deficit. If
            raising rates combats inflation because debt causes inflation by
            causing consumers to be price takers for the jobs of tomorrow, why
            not cancel corresponding bonds of{space}
            <a href="https://truncatedproductiontax.quora.com/Has-anybody-suggested-incentivizing-repayment-of-student-loans-by-using-matching-grants-instead-of-merely-cancelling-a-t-1">
              student loans
            </a>
            , or more pointedly reverse amortize (cash/debt)*income (invaluable
            borrower’s defense to repayment is not as strong as third party
            donee beneficiary surrendered freedom to bid in contract law, yet it
            is another’s standing but for as duress of the former-grounds).
            <br />
            <br />
            <a href="https://open.spotify.com/track/4tMZoPR9v4kvICAPyknxpa">
              fighting
            </a>
            {space}
            <a href="https://www.quora.com/unanswered/Can-we-replace-the-FDA-with-open-source-and-login-gov-Know-Your-Customer">
              RICO
            </a>
            <h3>
              Learn how to{space}
              <a href="https://www.quora.com/unanswered/Are-revolutions-precedence-for-reasonable-courts">
                dismantle
              </a>
              {space}the{space}
              <a href="https://www.quora.com/Why-are-homework-and-attendance-important-even-if-the-professor-is-wrong">
                books
              </a>
            </h3>
            "Hard on anyone relying on commercial adjustable rate loans.
            <br />
            That goes to the bottom line,{space}
            <a href="https://www.quora.com/How-do-you-evaluate-macroeconomics/answer/Nick-Carducci">
              marginally
            </a>
            {space}and{space}
            <a href="https://www.quora.com/If-inflation-happens-before-foreclosures-why-dont-economists-blame-private-credit-as-the-disparity-between-debt-from-cash-grows-Why-do-they-only-blame-the-government-for-compounding-prices">
              wholly
            </a>
            , how will it keep deposits in fed, fight inflation, what will that
            do to increase supply, it allows exasperated demand supply is geared
            from another like
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "80px" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://open.spotify.com/embed/track/7qdgz117gc5StS0u2ViinE"
              }
              float={"right"}
              title="https://open.spotify.com/track/7qdgz117gc5StS0u2ViinE"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
              iframe={{
                frameBorder: "0",
                allowFullScreen: "",
                allow:
                  "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              }}
            />
            https://www.quora.com/unanswered/Do-Republicans-like-real-GDP-employee-benefits-and-government-deficit
            <br />
            pro growth tax reform increase supply and tight money, a productive
            endeavor that would be good.
            <br />
            <a href="https://www.quora.com/unanswered/Are-fixed-cost-structures-included-in-non-essential-medical-and-tuition-employee-benefits-nor-government-deficit-inflation-or-otherwise-spent-profits-from-the-same-inflation-of-the-prior-quarterly-reporting-periods">
              Are fixed cost structures included in non-essential (medical and
              tuition employee benefits) nor government deficit inflation, or
              otherwise spent profits from the same inflation of the prior
              quarterly reporting periods
            </a>
            ?
            <br />
            <br />
            tort reform whistleblowers and drug users seek asylum in Portugal
            with me.
            <br />
            Tax-exemptions for essential gifts, -again? Why not use the certain
            disparity herein by race and outcomes to delinquency to asses the
            exclusive harm of debt, marginally? Let alone the
            thirdpartybeneficiary.quora.com contract law ignored in NJ Consumer
            Fraud Act warranties & estimates, a right &proper oxymoronic
            decadal-law
            {space}
            <a href="https://www.quora.com/What-are-the-consequences-of-universal-healthcare-in-America/answer/Nick-Carducci">
              my family-business deals with in Fair Haven courts
            </a>
            .
            <br />
            <br />
            <a href="https://www.quora.com/unanswered/Is-it-the-job-of-the-government-insurance-to-revoke-your-libido-if-the-gender-that-you-are-attracted-to-keeps-rejecting-you">
              Is it the job of the government insurance to revoke your libido if
              the gender that you are attracted to keeps rejecting you?
            </a>
            <br />
            $2k/day for Drug Addicts is why Democrats and Republicans wish to
            have Involuntary Commitment and Real GDP, fixed costs that include
            labor, of course, with living costs as a cost of goods sold, at the
            convenience of your clients, wherever you are, replace cop conflict
            of interest with Truncated Wholesale Tax 2024.
            <h3>
              Truncated Wholesale Tax for diminis sale (inclusive of relative
              period to cohort - time). Truncate requires a move yet derivative
              of measure. One-part big item, yet Wholesale does the minimum of
              existing extensions. However, once
              <br />
              Work from home convenient to client, professional sales and
              essential gift, inventing for competitors’ insurances,
              <br />I estimate 70% of sales and income tax will go uncollected.
            </h3>
            <a href="https://www.quora.com/unanswered/Is-Larry-Kudlow-correct-in-saying-that-income-without-taxes-fixed-costs-cost-of-goods-sold-government-and-net-nominal-exports-accounts-for-all-inflation">
              Is Larry Kudlow correct in saying that income without taxes, fixed
              costs, cost of goods sold, government, and net (nominal) exports
              accounts for all inflation?
            </a>
            <br />
            {/*Is Larry Kudlow correct in saying the perfect economy have the lightest tax and regulatory but not relent on tarrifs, or that real GDP accounts for all inflation?*/}
            <a href="https://www.quora.com/How-small-of-a-discount-can-a-sale-have-to-be-considered-a-gift">
              How small of a discount can a sale have to be considered a gift?
            </a>
            <br />
            <a href="https://www.quora.com/unanswered/Why-would-there-be-employee-benefits-at-all-when-you-can-gift-medical-and-tuition-as-essential-for-whatever-they-charge-not-to-even-enable-a-discount-for-to-be-under-the-annual-customer-bearing-gift-tax-reporting">
              Why would there be employee-benefits at all when you can gift
              medical and tuition as essential for whatever they charge, not to
              even enable a discount for to be under the annual-customer bearing
              gift tax reporting threshold?
            </a>
            <br />
            <a href="https://www.quora.com/unanswered/Are-employee-benefits-and-gifts-exempt-for-businesses-cost-of-goods-sold-and-after-personal-income-tax-the-same-functionally-given-their-common-medical-and-tuition-expense-classification-requirements">
              Are employee benefits and gifts exempt for businesses' cost of
              goods sold and after personal income tax the same, functionally,
              given their common medical and tuition expense classification
              requirements?
            </a>
            <br />
            <a href="https://www.quora.com/unanswered/Why-is-real-GDP-income-without-taxes-fixed-costs-cost-of-goods-sold-government-and-net-nominal-exports">
              Why is real GDP income without taxes, fixed costs, cost of goods
              sold, government, and net (nominal) exports?
            </a>
            <br />
            <a href="https://www.quora.com/Is-Steve-Kerr-correct-in-claiming-90-of-Americans-want-universal-background-checks-not-just-robbery-homicide-and-voters">
              Is Steve Kerr correct in claiming 90% of Americans want universal
              background checks, not just robbery/homicide and voters?
            </a>
            <br />
            <a href="https://bureau.quora.com/Are-individuals-with-mental-illnesses-in-the-U-S-more-likely-to-become-sex-offenders-or-violent-offenders-1">
              Are individuals with mental illnesses in the U.S. more likely to
              become sex offenders, or violent offenders?
            </a>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "100px" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.youtube.com/embed/7Jy9JyrukCY?start=145"
              }
              float={"left"}
              title="https://youtu.be/7Jy9JyrukCY?t=145"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "A child who doesn't know what is going on, talk, push on and
            listen. 'Let's figure this out, monitor it closely, turn it off. An
            adult need to helps kids calmly,'
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "80px" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/tb0xwekqn4v9nor/economic%20welfare.jpeg?raw=1"
              }
              float={"right"}
              title="economicwelfare.quora.com"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h3 style={{ float: "left" }}>
              <a href="https://www.quora.com/What-is-the-effect-of-ignoring-the-law-of-economics/answer/Nick-Carducci">
                What is the effect of ignoring the law of economics?
              </a>
            </h3>
            Prevent empathetically, because (for) children slowly start voting;
            stop having to intervene during the attacks." Dr Michelle Borba,
            "despite the sorrow, let them know life will go on,{space}
            <a href="https://www.quora.com/unanswered/Might-the-economy-be-the-cause-of-Islamic-banking-terrorism">
              altruistic-suffering
            </a>
            {space}like how the Parkland community got out there and mobilized -
            became active, said, '[it didn't stop the pain, but helped a little
            bit].' Teddy bear, plant a tree, ritual to cope, strategies to help
            with
            {space}
            <a href="https://www.quora.com/Should-I-tell-my-teacher-I-self-harm-Why/answer/Nick-Carducci">
              greif
            </a>
            ." Violentaization is prevalent in criminological studies, as
            opposed to a strong integity-of-empathy-people, who stop bullies.
            ...Issue no knock warrants by{space}
            <a href="https://www.quora.com/unanswered/Is-it-true-that-killers-write-manifestos-online-social-media-or-end-to-end-server-messages-before-murdering">
              manifestos
            </a>
            .{space}
            <a href="https://www.quora.com/unanswered/Are-quiet-and-shy-people-killers">
              People
            </a>
            {space}whom keep to themselves.
            <br />
            These essential gift reporting exempt{space}
            <a href="https://www.quora.com/Should-your-political-opponents-be-able-to-say-you-are-a-danger-to-themselves-or-others-while-children-are-being-killed-more-by-their-parents-lately">
              psychiatrists
            </a>
            {space}are not{space}
            <a href="https://www.quora.com/unanswered/If-most-mass-shooters-have-been-diagnosed-with-medication-before-offending-does-that-mean-it-doesnt-work">
              professional
            </a>
            .
            <br />
            Take guns away from sad people? Shoot on sight{space}
            <a href="https://www.quora.com/Can-I-count-gun-production-to-interpolate-nearly-all-if-not-all-unregistered-guns">
              unregistered guns
            </a>
            ?<br />
            Mean world syndrome, only see the bad, pessimistic, view, our
            children deserve better.
            <br />
            <a href="https://profiteconomics.quora.com/Disproving-Karl-Marx-s-Labor-Surplus-Exploitation-Theory-Here-is-the-second-disproof-According-to-Marx-1867-Vol">
              18% of swing voters (10%, 3.06m) approve of the U.S.
            </a>
            ,{space}
            <a href="https://insuranceisnotabusiness.quora.com/The-theft-https-thirdpartybeneficiary-quora-com-is-upon-the-compound-Budget-Constraint-https-www-quora-com-to">
              39% don't vote
            </a>
            .
            <br />
            <a href="https://www.quora.com/As-a-third-party-candidate-for-U-S-Senator-for-New-Jersey-would-I-be-better-running-against-them-instead-of-getting-them-to-not-run-a-candidate">
              Third Party Candidacy NJ 2024
            </a>
            {space}-{space}
            <a href="https://occupyrepublicans.quora.com/Why-was-young-voter-turnout-low-in-Brexit-referendum-1">
              Brexit
            </a>
            {space}(27%{space}
            <a href="https://nonvoters.quora.com">nonvoter</a>, still)
            <br />
            <a href="https://census.quora.com/Are-red-flags-prevalent-in-offending-homicides-as-Richard-Blumenthal-claims-1">
              Are "red flags" prevalent in offending homicides as Richard
              Blumenthal claims?
            </a>
            <br />
            <a href="https://www.quora.com/unanswered/Is-mental-illness-a-red-flag">
              Is mental illness a red flag?
            </a>
            <br />"
            <a href="https://www.quora.com/Is-value-added-per-capita-inflation">
              non-candidate single-issue voters
            </a>
            "<br />
            <h2>
              <a href="https://nonprofessionalproprietors.quora.com">
                Non-Professional-Proprietors
              </a>
              {space}(1099{space}
              <a href="https://regcops.quora.com">cops, tax-free</a>)
            </h2>
            {/**
        //https://www.quora.com/unanswered/How-can-Eric-Adams-look-at-the-reasons-of-offenders-without-considering-them
        //"[Need to look at the reasons of offenders, not just offenders]."
        //how can you look at offenders without considering them`
        */}
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "80px" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/6kxlls6rnpsjy04/homicide%20offending%20age%20weed.jpeg?raw=1"
              }
              float={"left"}
              title="bureau.quora.com - homicide offending age to weed use 90's negatively correlated justice statistics"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h1>
              <a href="https://www.quora.com/unanswered/Is-it-the-job-of-the-state-insurance-to-revoke-your-libido-if-the-gender-that-you-are-attracted-to-keeps-rejecting-you-1">
                cut it off - smd
              </a>
              {space}-{space}
              <a href="https://nonprofessionalproprietors.quora.com">
                1099 proximity housing
              </a>
              {space}-{space}
              <a href="https://regressivecops.quora.com">cops</a>
              {space}-{space}
              <a href="https://www.quora.com/unanswered/Do-I-need-to-keep-inventing-things-for-my-competitors-unemployment-benefits">
                market crash/tech/deflation
              </a>
              {space}by my{space}
              <a href="https://thumbprint.quora.com">inventions</a>
              {space}(gov and entertainment tech)?
            </h1>
            You are going to smd to{space}
            <a href="https://thumbprint.us">get in</a>
            {space}for{space}
            <a href="http://trajectory-inc.com/about-us/#team-members">
              mental health
            </a>
            , and so you don’t{space}
            <a href="https://thirdpartybeneficiary.quora.com">
              chomp my dick off
            </a>
            , Ill{space}
            <a href="https://minimalviableduress.quora.com">put it in a cup</a>?
            {/**
        35.4% anti-social can drive an Uber, 48% age-related musculoskeletal 
        problems are delinquent and had their chance.
        90's and covid excess by sewage means we need to go back
        significance of two time-period ...-cohorts
         */}
            An investigator's nemesis: not wanting.
            <br />
            The top are{space}
            <a href="https://www.quora.com/unanswered/Is-drug-use-a-red-flag">
              psychopaths
            </a>
            ," isn't that{space}
            <a href="https://www.quora.com/unanswered/Is-mental-illness-a-red-flag">
              ableism
            </a>
            ?
            <br />
            People become politicians (pissed or greedy, Reason)
            <br />
            Frank Gaffney, use{space}
            <a href="http://wabcradio.com/?p=232786">req.origin</a>
            {space}bro{space}Minute 29"
            <h4>
              “Thank G-d for that,”{space}
              <a href="https://open.spotify.com/track/7mKkJuVgkR72ozJGvJOTHP">
                howdeeho
              </a>
            </h4>
            18m barrels a barrels, 800k a day. Gas doubled, and checkable
            deposits tripled, $2t corporates after business taxes $1t
            ‘non-profit,’ $3t households. “If you know a witness lies once, you
            can hold all their testimony as not credible.” - Judge Janine,
            “Biden caused the inflation.” The CDC market crash deflation/tech
            displacement unemployment benefits this time, counting significance
            of single-year mortality is impossibly available for a sample size
            of time-periods going back to 1920. We only have population in 1x5
            and death rates at 5x5 year to cohort.
            <br />
            If population level only goes back to{space}
            <a href="https://humanharvest.info">1937 vitals</a>, and 1905 only
            has death rates, the 5 year cohorts can hide the
            end-(and-beginning-heavy lifetime expectation.
            <h1>
              <a href="https://www.quora.com/unanswered/Why-is-America-First-against-outsourcing-for-efficiency-and-savings-MAGA-could-even-keep-the-profits-instead-of-passing-the-savings-on-to-consumers">
                Experts
              </a>
              {space}are merely artifactual of{space}
              <a href="https://www.quora.com/unanswered/Is-the-federal-reserve-charter-system-a-monopoly-in-the-way-that-credit-is-enforced-for-JavaScript-that-could-easily-extend-modules-for-the-browser">
                problems
              </a>
            </h1>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "80px" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://open.spotify.com/embed/track/6XyxCBp6x3jvtxXvMN5sAA?utm_source=generator"
              }
              float={"right"}
              title="https://open.spotify.com/track/6XyxCBp6x3jvtxXvMN5sAA"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
              iframe={{
                frameBorder: "0",
                allowFullScreen: "",
                allow:
                  "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              }}
            />
            <h3>
              <a href="https://www.quora.com/unanswered/Is-the-cost-of-living-a-cost-of-goods-sold">
                Is the cost of living a cost of goods sold?
              </a>
              <br />
              <a href="https://www.quora.com/unanswered/Why-doesn-t-the-best-measure-of-inflation-count-tax-free-employee-benefits-government-nor-investment">
                Why doesn’t the best measure of inflation count tax-free
                employee benefits, government, nor investment?
              </a>
              <br />
              <a href="https://www.quora.com/unanswered/Why-doesn-t-the-best-measure-of-inflation-count-services-or-fixed-costs">
                Why doesn’t the best measure of inflation count services or
                fixed costs?
              </a>
              <br />
              <a href="https://www.quora.com/Why-can-cops-and-unprofessionals-not-file-as-a-1099-and-spend-tax-free">
                Why can cops and unprofessionals not file as a 1099 and spend
                tax-free?
              </a>
              <br />
              <a href="https://www.quora.com/Granting-W2-instead-of-1099-is-better-for-the-economy-why-is-income-tax-exempt-for-expenses-at-all-Is-it-to-compel-spending-Why">
                Granting W2 instead of 1099 is better for the economy, why is
                income tax exempt for expenses at all? Is it to compel spending?
                Why?
              </a>
              <br />
              <a href="https://www.quora.com/Who-is-the-employer-in-regards-to-employee-benefits">
                Who is "the employer" in regards to employee benefits?
              </a>
              <br />
              <a href="https://www.quora.com/Is-free-speech-protected-in-the-First-Amendment-in-regards-to-501-c-3">
                Is free speech protected in the First Amendment in regards to
                501(c) (3)?
              </a>
              <br />
              <a href="https://www.quora.com/Why-are-there-tax-breaks-for-employers-over-sole-proprietorships">
                Why are there tax breaks for employers over sole
                proprietorships?
              </a>
              <br />
              <a href="https://www.quora.com/Why-are-professional-services-less-so-subject-to-sales-tax">
                Why are professional services less so subject to sales tax?
              </a>
              <br />
              <a href="https://www.quora.com/Can-you-pay-yourself-through-a-self-employment-account-as-a-bartender-to-not-pay-income-tax-before-cost-of-living-expenses">
                Can you pay yourself through a self-employment account as a
                bartender to not pay income tax before cost-of-living expenses?
              </a>
              <br />
              <a href="https://www.quora.com/Can-you-be-a-sole-proprietor-and-take-business-relevant-employee-benefits">
                Can you be a sole proprietor and take business-relevant employee
                benefits?
              </a>
              <br />
              <a href="https://www.quora.com/unanswered/If-you-can-gift-essential-services-exempt-from-reporting-like-healthcare-and-education-why-are-they-called-employee-benefits">
                If you can gift essential services exempt from reporting like
                healthcare and education, why are they called employee benefits?
              </a>
              <br />
              <a href="https://www.quora.com/unanswered/If-professionals-services-can-be-exempt-from-sales-tax-and-income-tax-for-essentials-like-medical-and-tuition-by-filing-as-a-1099-why-cant-essential-workers-and-unprofessionals-Would-most-income-and-sales-tax-not-go">
                If professionals services can be exempt from sales tax and
                income tax for essentials like medical and tuition by filing as
                a 1099, why can't essential workers and unprofessionals? Would
                most income and sales tax not go uncollected?
              </a>
              <br />
              <a href="https://www.quora.com/unanswered/Why-are-non-essential-medical-nor-educational-gifts-only-considered-gifts-when-provided-at-a-discount">
                Why are non-essential medical nor educational gifts only
                considered gifts when provided at a discount?
              </a>
              <br />
              <a href="https://www.quora.com/unanswered/How-small-of-a-discount-can-a-sale-be-to-be-considered-a-gift">
                How small of a discount can a sale be to be considered a gift?
              </a>
              <br />
              <a href="https://www.quora.com/Are-unemployment-benefits-given-for-anything-but-deflation-displacement">
                Are unemployment benefits given for anything but deflation
                displacement?
              </a>
            </h3>
            “The least taxed service area[ is professional services], in large
            part because professional groups have powerful lobbying presences,
            as opposed to personal services[, like{space}
            <a href="https://scopebook.quora.com/Are-sales-taxes-charged-on-services-1">
              grooming
            </a>
            ].”
            <br />
            That is{space}
            <a href="https://open.spotify.com/track/2LgEYzVoSKp6fsST6trUh2">
              all you got
            </a>
            ?{space}
            <a href="https://micro-theory.com">I do everything</a>.
            <br />
            <br />
            <b>
              <a href="https://quora.com/unanswered/Why-arent-business-accounts-taxed-as-service-revenue-comes-in">
                Why aren't business accounts taxed as service revenue comes in?
              </a>
            </b>
            <br />
            False statement is not a crime, illicit behavior.
            <br />
            Free healthcare, if inflation is a general rise in prices,
            {space}
            <b>pool-inflation is certainly larger</b>
            {space}than{space}
            <i>individual capacity budget is required for the transaction</i>.
            <br />
            <a href="https://www.quora.com/unanswered/Do-we-still-give-unemployment-benefits-for-deflation">
              Do we still give unemployment benefits for deflation?
            </a>
            <br />
            <br />
            Inflation's best measure is after income tax?{space}
            <a href="https://selfemploymentbenefits.quora.com">
              Self employment benefits
            </a>
            {space}
            for W2 (bartender) reparations as if corporate
            in-kind-income-tax-employee-benefits, as a normal relevant-tuition
            and proximity-housing - bullshit all else.
            <br />
            <br />
            "We borrow it like everything else around here, so{space}
            <a href="https://occupyrepublicans.quora.com/Do-tariffs-make-life-better-for-citizens-1">
              we will see inflation
            </a>
            [ by not using Hrynvia (
            <a href="https://courttechnology.quora.com/Is-saying-drop-dead-a-threat-1">
              70% grain equity for
            </a>
            {space}the treasury)]." - Rand Paul
            <br />
            Income as successful as they should,{space}
            <a href="https://www.quora.com/How-did-the-rich-survive-the-Great-Depression/answer/Nick-Carducci">
              wealth disparity
            </a>
            {space}as market concentration, expense-benefits under cost of
            living TAX FREE (service no sales tax, either) .
            <br />
            individual division of labor and all-at-once+a-la-carte
            <br />
            self-employment-benefits for all w2 instead of unionization
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/p2l3xym3brjqph1/Screen%20Shot%202022-05-18%20at%2011.05.09%20AM.png?raw=1"
              }
              float={"left"}
              title="john fetterman union"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Populist?"
            <br />
            <br />
            <a href="https://www.quora.com/Does-price-change-faster-than-hours-worked/answer/Nick-Carducci">
              skillset for a living wage, education is to displace jobs....
            </a>
            <h1>
              <a href="https://truncatedwholesaletax.com">
                Can you pay yourself through a self-employment account as a
                bartender to not pay income tax before cost-of-living expenses?
              </a>
            </h1>
            <br />
            physical profit = purchases less deficit, employee-benefit
            pool-charge, net export -{space}
            <a href="https://saverparty.xyz/global">
              efficiency parity to import by *GDP/p ratio of domestic/foreign
            </a>
            <br />
            unkempt{space}
            <a href="https://livetaxfree.quora.com">uniform</a>
            <br />
            It is a gift if you keep track of sales.{space}
            <a href="https://truncatedwholesaletax.quora.com">
              Truncated Wholesale Tax
            </a>
            {space}is therefore implied to me.
            <br />
            Certainly - pool-inflation is ascertainably larger than otherwise.
            All at once and a la carte is how wholesale differs from collections
            that are flaccid and lose any bargain, as I describe three facets of
            such in microeconomics in my piece. I use macroeconomic national
            accounts elsewhere to ascertain damages to the economy by value
            added as a share of GDP in insurance/employee-benefit heavy areas
            (healthcare), to which technology should be lessening price, faster
            than lifetimes grow. I discuss recently the prospect of tax-free
            self employment accounts for all w2 workers to compete fairly with
            {space}
            <a href="https://selfemploymentbenefits.quora.com">
              exempt in-kind fringe income ({">"}$10k/customer/yr reporting)
            </a>
            {space}
            benefits, lately, to dismay such trust-building.
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/bktdvebnhwsyvsh/Screen%20Shot%202022-05-18%20at%208.58.15%20AM.png?raw=1"
              }
              float={"right"}
              title="Liz Fosslien (shouted by Prof. Galloway)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h2>
              <a href="https://www.quora.com/Can-I-claim-unemployment-for-technological-displacement?">
                OPEN SOURCE
              </a>
            </h2>
            non-voters anti-insurance single-edge-turnout (25-44 -5% 2016-19
            U.K. Brexit, 5%/-5% liberal leavers)
            <br />
            you are going to drink molten gold, sid rosenberg
            <br />
            Take back all gifts and third party donee beneficiary.{space}
            <a href="https://inkindincometaxexemptbenefits.quora.com">
              end insurance
            </a>
            ,{space}
            <a href="https://reverseamortization.quora.com">
              (cash/debt)*income
            </a>
            , vertical-expense-line{space}
            <a href="https://maxroyalties.quora.com">tortious revenue-skimp</a>/
            <a href="https://vaults.quora.com">upon-sale</a>.
            <br />
            Asperger syndrome high-level (?edge) autism spectrum?
            <br />
            make{space}
            <a href="https://www.quora.com/How-did-the-rich-survive-the-Great-Depression/answer/Nick-Carducci">
              people
            </a>
            {space}vote by forcing a "no" to reconcile othewise
            <br />
            sample size is months? 73 2020 3 years 78
            <br />
            real GDP/yr is employee-benefits,{space}
            <a href="https://markethistory.quora.com/Have-unemployment-benefits-been-given-for-deflation-1">
              market crashes/tech displacement for unemployment benefits
            </a>
            <h2>
              Room & Board, duress (legal)
              {/*"90% single/shooting" - M. Goodwin */}
            </h2>
            “Nobody called in,” he said. “Nobody called any complaints,”
            Gramaglia said. The threat was “general” in nature, he said, and not
            related to race.
            <br />
            New York is one of several states that have enacted “red flag” laws
            in recent years that were intended to try and prevent mass shootings
            committed by people who show warning signs that they might be a
            threat to themselves or others.
            <br />
            <br />
            Innovation should lessen growth per person,{space}
            <a href="https://maxroyalties.quora.com">max royalties</a>
            {space}and third party donee beneficiary protections by EULA but not
            pool-inflation and invoice are a choice.
            <br />
            <br />
            In an economy of opportunity, how do we{space}
            <a href="https://www.quora.com/If-inflation-is-too-much-money-chasing-too-few-goods-are-pool-charges-and-employer-contributions-to-employees-costs-of-living/answer/Steven-Blanchard-28">
              maintain price stability
            </a>
            ? Buying mortgages and treasuries is{space}
            <a href="https://secretary.quora.com/How-long-will-it-take-to-pay-off-the-US-national-debt-1">
              normal
            </a>
            ? "The pain is necessary, but the slow-suffering isn't. They acted
            rapidly in increasing reserves,{space}
            <a href="https://federalreserve.quora.com/What-can-the-government-do-about-inflation-1">
              now they need to be quick in draining reserves so people buy-in to
              treasuries
            </a>
            {space}again without waiting for the fed, on this 5 basis point
            trek. It is ok to encounter an{space}
            <a href="https://www.quora.com/Is-a-market-crash-grounds-for-continuing-unemployment-claims">
              old fashioned
            </a>
            {space}financial crisis to provide{space}
            <a href="https://www.quora.com/unanswered/Can-financial-advisors-claim-continuing-unemployment-benefits-for-market-crashes-if-they-tell-their-clients-there-is-no-guarantee-of-funds-returned">
              unemployment benefits
            </a>
            {space}for the{space}
            <a href="https://www.quora.com/Is-a-market-crash-grounds-for-continuing-unemployment-claims">
              job displacement of corrections
            </a>
            ." Kathy Barnett
            <br />
            <br />
            If you have technology, you will displace people from the labor
            market. I'll bill you for the minutes of Netlify build time that are
            required to doxx additional statements. Your{space}
            <a href="https://www.quora.com/unanswered/If-inflation-is-a-rise-in-price-does-pool-charge-insurance-cause-inflation">
              scope
            </a>
            {space}of requirements were ambiguous and third party donee
            beneficiary invoking, just the same as your reasoning for growth of
            structures, equipment and intellectual property (claims instead of
            copyright, that implies claim/person limitation).
            <br />
            <br />"
            <a href="https://www.quora.com/Are-trade-secrets-property-or-exclusive-answer-trusts/answer/Robert-Charles-Lee">
              Not enough industry interest
            </a>
            ." Real wages only discounts non-employer-contributions. Profits
            aren't included, and so then neither is inequality after all-expense
            (
            <a href="https://secretary.quora.com/How-long-will-it-take-to-pay-off-the-US-national-debt-1">
              where checkable deposits end up
            </a>
            ).
            <br />
            <br />
            “GOP influencers seeking power, not representing its people.” Bitch,
            I am{space}
            <a href="https://saverparty.xyz">Saver</a>.
            <br />
            Welfare, closing the beaches,{space}
            <a href="https://www.quora.com/unanswered/Can-financial-advisors-claim-continuing-unemployment-benefits-for-market-crashes-if-they-tell-their-clients-there-is-no-guarantee-of-funds-returned">
              market-value crash displacement
            </a>
            , unemployment benefits by{space}
            <a href="https://www.quora.com/Can-I-claim-unemployment-for-technological-displacement">
              tech displacement
            </a>
            ? CYA PWC
            <br />
            {/**it doesn't matter substitutive supply efficiency, they just don't want to pay */}
            still boycotting credit... 18m consumed,{space}
            <a href="https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=WTTIMUS2&f=W">
              3m in and out
            </a>
            , 830k potential, doubles the price? no
            <br />
            <br />
            the O.K. corrale or efficient by eternities.... who would want to go
            to jail? who would want to kill and what law would bar holds but
            without efficiency as omnipotent?
            <br />
            Population growth might match, drug overdose data 2015-
            <br />
            <h2 style={{ float: "right" }}>efficiency precedence</h2>
            <br />
            you don’t need to medicate the homeless,
            <br />
            <br />
            trespass to nowhere is grounds enough to house the homeless without
            pharmaceutical kickbacks
            <h2
              style={{
                float: "right",
                width: this.state.openSynth ? "200px" : "0px",
                transition: ".3s ease-in"
              }}
            >
              article 1.8 uniform{space}
              <a href="https://www.quora.com/Are-guilty-pleas-moot-if-untrue/answer/Anthony-M-Bruce">
                racket DUI twice decadal growth
              </a>
              . "I'm protected by FDIC insurance, right?"
            </h2>
            <br />
            You assess drug overdose by the border, how?
            <br />
            <br />
            Motor Vehicle ID Near Field Comm bridge tolls, get us off of 40%
            debt service of third party donee beneficiary and before you ask
            what that is it is what people who make product have to ensure they
            do not invoke, say, promising performance of anothers’ money instead
            of revenue skimping upon vertical industry lines with max royalties,
            after reverse amortization (cash/debt)*income. I use reasonable
            doubt to acquit
            <br />
            <br />
            we need to check the parcels for the fentanyl pills 2% of
            automobiles are. Its a fruitless endeavor unless we cannot
            <br />
            Bring pharmacies and cartels together
            <br />
            name/review and open source instead of FDA and animal-testing,
            instead
            <br />
            <br />
            So all the sudden lifting title 42, is a problem more scapegoating
            like medicating the homeless when trespass to nowhere is housing
            ground enough, when citizens are one percent more criminal than
            illegals? Asylum note from the threatening government. Why won’t
            Ukraine share-split Hryvnia for their migs? Makes me think it is to
            scape refugees for non-hispanic whites. when did we go from dogs to
            phones and a hotel
            <br />
            <br />
            Under $10k/customer is gift - after that your lifetime $11.5m
            exemption tax hits. Just like employers pay for the cost of living
            of their employees tax free, given it is normal, not extravagant.
            General Maintenance Unit would help, 11/12 industry-variable permits
            of minimal viable duress, name/review and open source, no more
            FDA/ICE!
            <br />
            PCE actually includes up to cost of living employee benefits.
            <br />
            And you can you pay yourself (BARTENDERS) as a loss through a small
            business and sales tax only after $10k/customer/yr.
            <br />
            'Physical' product activity would be net import purchases minus the
            deficit.
            <br />
            nominal trade is not a national security issue, but FDI and to boot
            - not because of - Article 1.8 uniform is by method and scope for
            treasury rents.
            <br />
            Marxism and drug gangs, name/review and open source, minimal viable
            duress.
            <br />
            <br />
            1m/yr+ net 5m/yr+ births 40m 9m on top of 330m illegal, visa fees
            and closed source pharmacy.
            <br />
            <br />
            Vitro fallacies, crowding out is a fallacy and they can counteract
            the laborless-demand of finance. Bring cartels and pharmacies on the
            same playing field maybe they won’t be so violent. We need a virtual
            id for anon voting, brokerages, but also convict intranet,
            name/review and open source instead of FDA, animal testing and
            prescription costs nor horizontal pool charges. We need to
            repatriate industry by banning labor less demand in finance, third
            party donee beneficiary in implausible use lease pool-charge
            employer contributions tax free under cost of living and invoice,
            just wait for customers with an industry-vertical revenue skimping
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.youtube.com/embed/eXh8iN9xIRI"
              }
              float={"right"}
              title="Rita Cosby on Mexican cartels, open source and substitutive supply, ending - https://youtu.be/eXh8iN9xIRI"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Visa or license fee?
            <br />
            <br />
            "Half the Democrats would be closed to substitutive-supply for
            Americans.
            <br />
            Economic growth, revenue side, for corporate profits,” is what Newt
            Gingrich cares about,{space}
            <a href="https://www.quora.com/If-there-is-a-rise-in-demand-and-a-shortage-does-the-demand-curve-shift-or-does-the-supply-curve-shift/answer/Nick-Carducci">
              totally elastic upwards of equilibrium
            </a>
            .
            <br />
            <br />
            “A balanced budget will boost economic growth.” Actually deficit
            counts towards not physical profit purchase but real GDP
            <br />
            <br />
            Single-year-age excess deaths used a sample size of months because
            that isn’t 100th of population for significance from mean, it’s like
            a meaningless significance seasonally
            <br />
            <br />
            Would you say “exclusionary trust” to discern between an
            investment-trust and an illegal-one? Or monopolistic-one, if you do
            not consider monopolies illegal prima facie.
            <br />
            <br />
            Vitro fallacies, crowding out is a fallacy and they can counteract
            the laborless-demand of finance. Bring cartels and pharmacies on the
            same playing field maybe they won’t be so violent. We need a virtual
            id for anon voting, brokerages, but also convict intranet,
            name/review and open source instead of FDA, animal testing and
            prescription costs nor horizontal pool charges. We need to
            repatriate industry by banning labor less demand in finance, third
            party donee beneficiary in implausible use lease pool-charge
            employer contributions tax free under cost of living and invoice,
            just wait for customers with an industry-vertical revenue skimping
            <br />
            <br />
            China efficiency-parity shows their physical consumption verily is
            more than the U.S. by population and not physical expense per
            capita.
            <br />
            Any draft for tax-jurisdiction (by land) is a rogue state.
            <br />
            I’ve got an idea, ‘pay for your own shit!” There’s your fucking idea
            <br />
            what, now you are on my side, fucking... faggot?
            <br />
            Secure jobs and close borders,” population and crowding out is a
            fallacy because historically without financialization even amongst
            3-1%/yr+ population GDP%/yr flat. Closed source pharmacies, animal
            testing kink and visa fees for more criminal citizen trust-building
            is self-harm.
            <br />
            <br />
            medicatethehomeless.quora.com
            <br />
            "Broad judgement mental and emotional health," standing for justice?
            <br />
            Why do I have to rebuild 2012 software to take debit without credit?
            <br />
            <br />
            “There needs to be better efforts made to ensure that we have
            formula, that a recall doesn’t happen because one plant in MI{space}
            <a href="https://generalmaintenanceunit.quora.com">screws</a>
            {space}up.”
            <br />
            <br />
            Is real GDP profit of{space}
            <a href="https://substitutivesupply.quora.com">fixed costs</a>?
            <br />
            Tax breaks are discrimination of sector and organizational structure
            in my book, and you need a reason for a law to pass muster of public
            opinion, not{space}
            <i>just because that’s how it is done</i>.{space}
            <b>
              <a href="https://www.quora.com/Why-isn-t-healthcare-an-income-taxable-fringe-benefit">
                Why
              </a>
            </b>
            {space}
            is
            <br />
            1. healthcare,
            <br />
            2. within perimeter and necessary housing, and
            <br />
            3. investment
            <br />
            contributions, tax-free? From your “defense” of the law, the reason
            is trust-building, prima facie.
            <br />
            <a href="https://www.quora.com/Can-I-pay-myself-through-a-business-to-not-pay-income-taxes-like-it-is-a-fixed-cost/answer/Nick-Carducci">
              Nick Carducci's answer to Can I pay myself through a business to
              not pay income taxes like it is a fixed cost?
            </a>
            <br />
            <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/amp/">
              65%
            </a>
            {space}
            are anti-insurance, and both parties are for, so non-voters must
            find pool-charges to not be additive to the General{space}
            <a href="https://economicwelfare.quora.com/)">Welfare</a>
            {space}
            but destructive, as well. Third party{space}
            <a href="https://digitalcommons.law.uw.edu/cgi/viewcontent.cgi?article=1260&context=wlr">
              donee
            </a>
            {space}
            beneficiary bid is the grounds I present to not only end invoices
            but insurance as well. What is an estimate, warranty or guarantee if
            it is not a consignment of{space}
            <a href="https://thirdpartybeneficiary.quora.com/">
              Third party beneficiaries'
            </a>
            {space}
            bids, surrendered.
            <br />
            <br />
            "Polish migs would have stopped us from signing $40b (Ukrainians are
            rich, they can pay for it)" Con. Steven P Mississipi
            <br />
            <br />
            Vertical-expense-line instead of supply-chain? supply is
            propensities for utility/indifference of substitutive-supply,
            sorted. We need less laborless-demand, so that it doesn't suffocate
            labor-borne. Non-voters are anti-insurance, for less real GDP and
            stagflation thereby, but less pool-charge of third party donee
            beneficiary. Plants by government subsidies just increases the same
            inout costs of material and variable-part labor for more money,
            elastic equillibrium.
            <br />
            <br />
            Why would I take a job that I know is{space}
            <a href="https://2024nj.com/bachelors">not necessary, -abjectly</a>,
            but as well in{space}
            <i>job utility</i>, when I venture to abstain, relent and force ban
            of labor-borne due to laborless.{space}
            <b>It pays, but</b>
            {space}that doesn't mean it is a better start to be the plunderer,
            for
            {space}
            <b>it is always a firesale</b>
            {space}and elastic of equillibrium, real and effectual price, or
            hour, per living. I am a bartender,{space}
            <a href="https://github.com/NickCarducci/mastercard-backbank">
              dealing in cash
            </a>
            , or I am nothing.
            <br />
            Sound money is not acheived by bitcoin, hundreds of node-trust
            notwithstanding, when you lend it.
            <br />
            "You are a Conspiracy theorist," translates to "I will not belie
            myself of your conclusions."
            <br />
            <h2>Big egg - precedence shows and also what but for else</h2>
            “Big on the left or the right, the Supreme Court is not above any
            other branch of government.” - Chris Hahn
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/n9uzab1lk3bfrvn/Screen%20Shot%202022-05-08%20at%204.51.13%20PM.png?raw=1"
              }
              float={"right"}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <br />
            Stagflation will happen when ban insurance.
            <br />
            <div style={{ borderLeft: "3px solid", marginLeft: "4px" }}>
              Carducci I predict another pandemic in three years{space}
              <span role="img" aria-label="crystal ball">
                🔮
              </span>
              <br />
              75 jumped up, now, 73 covid 2020
              <br />
              Please if anyone knows the sample size
              <br />
              of single-year age significance excess death rate p{"<"}.05
              <br />
              sure but n=2019-20 lmao
              <br />
              <br />
              Significant change-rate of less than
              <br />
              even a modicum with n=2. Paint normal chance for
              <br />
              percentile report n{">"}99 {/*(variance from mean)*/}
              <br />
              <br />
              an exponential bump has two rates of change along a
              time-period-series.
              <br />
              <br />
              how far from real mean?
            </div>
            <br />
            Does a{space}
            <a href="https://secretary.quora.com/What-does-a-flight-insurance-cover-1">
              pool
            </a>
            -chargeness of expense-benefits make it third party donee
            beneficiary bid, by corporate account, or is it{space}
            <b>
              <a href="https://realecon.quora.com/Are-Republicans-really-against-providing-healthcare-to-all-Americans-or-is-this-some-kind-of-running-joke-As-a-European-1">
                the horizontal-nature
              </a>
            </b>
            , like Barclays and Apple. For that matter, a company cannot lend
            you their expense for that is horizontal and{space}
            <b>surrendered bid</b>. Tax-free employee-living costs as a{space}
            <a href="https://thumbprint.quora.com/Are-non-voters-against-insurance-1">
              business-expense
            </a>
            ,{space}
            <b>is not</b>. Neither is income as a loss for APV-amortized
            self-employment tax and max royalties.
            <br />
            <br />
            "Conscripts, not-so-well-read Red Army." Bond loss profit banned
            would probably stop the war for incentive to spend.
            <br />"
            <a href="https://crowdfundingfortaxes.quora.com">
              To bring a business in structures depends on safety, not low taxes
            </a>
            ."
            <br />
            1/3 non-voters must be anti-insurance if both parties are for it.
            {/**swing voter, "most privvy soccer mom, to what costs" */}
            <br />
            Unions -{space}
            <b>corporate/(employer) tax(income)-free expense benefit</b>,
            ...next govrent
            <br />
            "government needs to help IP/gdpi/pool-charge real GDP." If such
            value-added is such a{space}
            <a href="https://economicwelfare.quora.com/What-is-the-most-confusing-aspect-of-economics-1">
              target
            </a>
            {space}to{space}
            <a href="https://www.quora.com/What-are-the-main-challenges-of-macroeconomics-policy/answer/Nick-Carducci">
              make
            </a>
            {space}for efficiency,{space}
            <a href="https://landlordliquidity.quora.com">landlord liquidity</a>
            {space}goes without saying (without housing part of CPI that is real
            of GDP by{space}
            <a href="https://census.quora.com/What-does-a-high-CPI-indicate-1">
              GDP-CPI
            </a>
            ).
            <br />
            {/*sepsis miscarriage - accident?<br/>*/}
            Let's get y'all started.
            <br />
            Need 11/12 jury-permit to prove (DSM/courts differing standards of
            physical evidence, and grounds) mental illness, for what?{space}
            <a href="https://https://crowdfundingfortaxes.quora.com/">
              trespass to nowhere
            </a>
            {space}is{space}
            <b>
              enough to arrest and house, no need to kickback risperidone
              eugenics
            </b>
            , just like illegal immigration (-1%/p criminal, 86 visa fees and
            FDA with naming and open source).
            <br />
            <br />
            <a href="https://monopolies.quora.com/What-are-the-consequences-of-a-business-having-too-much-power-1">
              TECH
            </a>
            -
            <a href="https://www.quora.com/Will-technology-get-cheaper-in-the-future/answer/Nick-Carducci">
              DESTROYER
            </a>
            <br />
            Saving 500 jobs and expenses vs the earth, and leisure?
            <br />
            <a href="https://rolloverinsurance.quora.com">Unions</a>
            {space}used to corpoate next govrent, unemployment claims, now not
            pool-charge but compel strikes.{space}
            <a href="https://implausibleuseleases.quora.com">
              implausible use leases
            </a>
            {space}market{space}
            <a href="https://landlordliquidity.quora.com">liquidity</a>. "He is
            the one that will be paying the bills debt-service for this," We all
            pay for third party donee beneficiary.
            <br />
            <br />
            "Lean government, the{space}
            <a href="https://realecon.quora.com/How-does-the-tight-labor-market-cause-inflation-1">
              law of Supply and Demand
            </a>
            , let workers and families do their thing, 'We care about poor,
            minorities, women's rights,' they care about power, any way we can.
            ...'If they stop there is a disaster, or if they keep going,'{space}
            <a href="https://federalreserve.quora.com/Why-are-some-economists-saying-that-Feds-acted-too-late-to-increase-interest-rate-Whats-going-to-happen-1">
              moreso if you are in a ditch, you stop digging
            </a>
            .'" - Stephen Moore
            <br />
            GOVMVP:
            <br />
            <h2>REGRESSIVE COP TAX - name/review, open source, and sewage</h2>
            <h4>
              ween your justice off per diem incarceration malfeasance-rackets
              of match-presentation-defunctionary or before physical-evidence,
              to review.
            </h4>
            Truncated Production Tax{space}
            <a href="https://reverseamortization.quora.com">reverse amortize</a>
            {space}(cash/debt)*income third party donee beneficiary, doctor
            slave lest for pool-charge, rollover over their dead bodies...
            geohash/month + 2 week public review "self"-reporting.
            <br />
            <br />
            <a href="https://www.bmj.com/company/newsroom/nine-out-of-10-abortions-done-before-12-weeks-in-many-high-income-countries/">
              TEST FATTIES
            </a>{" "}
            - think of the great{space}
            <i>health</i>
            {space}consequences
            <br />
            <br />
            It would take 44 years if current income is used to pay debt,
            foreseeably impossible and waranty/third party donee beneficiary
            oxymoronic NJ Consumer Fraud Act.
            <br />
            GDP is integrally population, are you overeating?
            <br />
            "loans (
            <a href="https://www.quora.com/How-much-of-commercial-banks-income-is-from-loans-without-deposits-and-how-much-is-from-savings-for-treasuries/answer/NICE-HVAC">
              most aren't even checkable, time nor savings deposits
            </a>
            ) to puchase (
            <a href="https://vaults.quora.com/What-is-that-one-tip-that-you-can-give-to-someone-who-is-drowning-in-debt-1">
              third party donee beneficiary
            </a>
            ) a service (trade-secrets) is not our fault (duress)."
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/xzldp22vmnebk95/washington%20post%20retired%20pop.jpeg?raw=1"
              }
              float={"right"}
              title="washington post retired"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Unknown numbers."
            <br />
            Ethics in juris is{space}
            <a href="https://phyletic.quora.com/Why-is-killing-illegal-1?ch=10&oid=354318407">
              efficiency
            </a>
            , omnipotently.
            <br />
            <a href="https://www.quora.com/What-are-the-main-challenges-of-macroeconomics-policy/answer/Nick-Carducci">
              Healthcare - pool-charge
            </a>
            ? 65% anti-insurance, both parties for, so non-voters must be
            against.
            <br />
            Why is there a license but for closed source? That is not going to
            hold long, NJ will just take advantage of this oversight of consumer
            protections from the juris.
            <h3>
              Collective bargaining requires all-at-once and a-la-carte (not
              insurance pool-charge).
            </h3>
            <a href="https://www.conference-board.org/blog/labor-markets/Retiree-Growth">
              <Cable
                style={{
                  transition: ".3s ease-in",
                  width: this.state.openSynth ? "" : "0px"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/kibl7ggx3expk1u/retired.png?raw=1"
                }
                float={"right"}
                title="https://www.conference-board.org/blog/labor-markets/Retiree-Growth"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.openSynth && this.state.scrollTop}
              />
            </a>
            1m covid death 500k/yr+,{space}
            <a href="https://actuaries.quora.com/">1.2m/yr+ expected</a>.
            'Genocide remains to be seen, if virion requires cell to reproduce,
            how did the first come about? Is viral and{space}
            <a href="https://bacterium.quora.com/">bacterial</a>
            {space}pneumonia polyphletic? Can you test for PIC-concurrently?
            {space}
            <a href="https://phyletic.quora.com/">
              Wuhan failed to inseminate in lab
            </a>
            .
            <br />
            Causation is proven if presentation matches (with order).
            <br />
            <br />
            ‘Productivity’ according to WEF, OECD and BEA is expenses per hour,
            the opposite of ‘efficiency’ if you will. If outsourcing is cheaper,
            the domestic country is more productive, and the foreign country is
            more efficient.
            <br />
            <br />
            <hr ref={this.covid} />
            <Population
              lastWidth={Math.min(600, this.state.lastWidth)}
              style={{
                paddingBottom: "15px",
                backgroundColor: "rgb(190,150,180)"
              }}
            />
            {/**yeah you like that don't ya */}
            Outsourcing would cut the hours down for the same expense, thereby
            increasing productivity - or, remaining the same - if foreign wages
            are just as efficient and the savings are passed on to consumers.
            Yet moreso:
            <br />
            <br />
            <div style={{ borderLeft: "3px solid", marginLeft: "4px" }}>
              Productivity by outsourcing -
              <br />
              only when the variable-part of input-costs, -labor, is outsourced
              (&& the foreign country is efficient, implied in your decision),
              can you charge the customer for more expense, passing YOUR savings
              on as a producer to the customer as margin lol, making more
              productive profit!
              <br />
              <br />
              For instance, see our{space}
              <a href="https://fred.stlouisfed.org/graph/?g=OZWu">
                pharmaceutical expenditure
              </a>
              , albeit that is shared by outside-of-pocket and FCSU staples, so
              will be seen both in real GDP growth and stagflation, it increases
              because of insurance presentation, and mean inflation targeting is
              why it is not growing as fast as it was around the 80’s, ?
            </div>
            <br />
            Labor productivity, then, is if those gains from outsourcing are
            disbursed as expense-benefits, tax-free income-like, or wages
            outright, versus kept in the corporate profit account, or just tying
            off any change in productivity at the wage nor proprietor account at
            all from outsourcing by keeping margins on revenue-income the same.
            <h4>
              <a href="https://saverparty.xyz/global">Compel</a>
              {space}NATO, (<a href="https://saverparty.xyz/nato">how?</a>)
            </h4>
            <br />
            <div
              style={{
                padding: this.state.openSynth && "4px 10px",
                border: this.state.openSynth && "3px solid",
                marginLeft: "4px",
                borderRadius: "10px",
                marginRight: "10px"
              }}
            >
              Benefits’ tax-“free” expense, or income as a{space}
              <span
                style={{
                  textDecoration: "underline"
                }}
              >
                loss
              </span>
              {space}cost of production/goods sold , is not a fucking
              tax-“break[ verb].”
            </div>
            marginal value would price take budget contraint but for insurance,
            installments and rents.
            <br />
            import outsourcing labor of other markets horizon themsleves but for
            money and exclusion inflation.
            <br />
            would cartels be peaceful if the DEA wasn't destroying their
            pharmacy?
            <br />
            <br />
            Checking has tripled in 2 years, with
            GDP-structures-equipment-durable-goods-food-clothing-housing-utilities
            decreasing while healthcare remained the same proves PROFITS BY
            PREMIUM ARE NEGATIVELY CORRELATED WITH INCOME per living
            <br />
            <br />
            Can you guys report on income after expenses inequality results from
            tax breaks on benefits and real GDP/yr productivity value-adds’
            expense? That alone is an ascertainable loss, no reference to
            another century required.
            <br />
            <br />
            Benefits are tax-break? for real GDP outside-of-expense per hour
            “value-added-productivity?” Didn’t get in trouble with the
            healthcare industry? Take people out of streets and enslave them,
            19/20 $630b/yr bank income lending something other than deposits the
            "Do Fund do great for society." Pool-charge and outright third party
            donee beneficiary, not your own bid. Luke Petitgout, I'll rip your
            throat out. Let people do drugs without your imposition, faggot.
            SELF DEFENSE
            <br />
            <br />
            If it really is a crime && evidence, why is there bond? Per diem
            incarceration bond loss profit?
            <br />
            George P. Bush, celebrating Spanish because, "
            <a href="https://www.quora.com/unanswered/If-illegal-immigrants-are-less-criminal-is-the-legal-immigration-system-in-existence-merely-to-acquire-visa-fees">
              mother born in Mexico
            </a>
            ."
            <br />
            Norm: "Maniacs against employees, if they dont calm down[ riot for
            Federalism], they are going to have a war this summer." Dems racist
            for programs, Repubs for visa fee (
            <a href="https://vaults.biz/immi">
              -1%/p presentation illegal-criminal
            </a>
            ). "Legal loopholes for asylum[, note of facism from government],"
            when dogs to phone and hotel?
            <br />
            <br />
            <div style={{ borderLeft: "3px solid", marginLeft: "4px" }}>
              “Benefits lower the tax brackets $8k/year daycare, $4k/year
              abortions,” - Disney. “It may be another motive to expire premiums
              just for a tax break.”{space}
              <a href="https://rolloverinsurance.quora.com/">
                Rollover Insurance
              </a>
            </div>
            <br />
            <a href="https://carfacedimonlikefloyd.quora.com">
              Where do the banks get the money that they lend to people
            </a>
            ?
            <br />
            Originally Answered: Where do banks get the money used when making a
            loan to a borrower?
            <br />
            <div
              style={{
                padding: this.state.openSynth ? "4px 10px" : "0px 0px",
                border: this.state.openSynth && "3px solid",
                marginLeft: "4px",
                float: "left",
                borderRadius: "10px",
                marginRight: "10px"
              }}
            >
              <a
                href="https://virtualid.quora.com"
                style={{ fontSize: this.state.openSynth && "30px" }}
              >
                Virtual ID
              </a>
            </div>
            <div style={{ borderLeft: "3px solid", marginLeft: "4px" }}>
              Jakob Malki, Jun 8, 2020: "It used to be that they would give you
              someone else's money, but when multiple people wanted to take a
              loan, that did not work out so well. So now they just create money
              out of nothing and give it to you." According to this businessman,
              1/20 of bank income is from that. Most of it is not even third
              party donee beneficiary in a contract, but outright counterfeit,
              not even collateralizing -ex renovations!{space}
              <a href="https://www.quora.com/How-much-of-commercial-banks-income-is-from-loans-without-deposits-and-how-much-is-from-savings-for-treasuries/answer/NICE-HVAC">
                NICE HVAC's answer to How much of commercial banks’ income is
                from loans without deposits and how much is from savings for
                treasuries
              </a>
              ?
            </div>
            <br />
            <a
              href="https://www.quora.com/Are-non-voters-against-insurance/answer/Aidan-Griffin-29"
              style={navitem}
            >
              <Cable
                style={{
                  transition: ".3s ease-in",
                  width: this.state.openSynth ? "" : "0px"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/vxgy8nfzjlw71gv/Screen%20Shot%202022-05-04%20at%208.08.16%20AM.png?raw=1"
                }
                float={"right"}
                title="https://www.quora.com/Why-doesnt-the-left-get-upset-with-the-racism-of-Karl-Marx/answer/Aidan-Griffin-29"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.openSynth && this.state.scrollTop}
              />
            </a>
            <a href="https://truncatedproductiontax.quora.com">Yes</a>, yet it
            can also mean just letting up on quantitatively-targeting the
            household, corporate, “non-profit,” and{space}
            <b>checkable-deposit</b>
            {space}borne coupon-ask, a bit.
            <br />I hope that{space}
            <b>time and savings-bonds/-deposits</b>
            <br />
            1. aren’t used in loans and
            <br />
            2. earn some of $600b/yr+ as one of the banks that lend from
            **something other than{space}
            <a href="https://federalreserve.quora.com/Why-are-some-economists-saying-that-Feds-acted-too-late-to-increase-interest-rate-Whats-going-to-happen-1">
              deposits
            </a>
            .
            <br />
            <br />
            Change in billions of GDP “
            <a href="https://fred.stlouisfed.org/graph/?g=OQF5">value-adds</a>”
            <br />
            <br />
            Unions income inequality SQUASHED by bond income COMPEL STRIKES BY
            BUYIN HAZARD - pool-charge third party donee beneficiary
            <br />
            Value-added expense{space}
            <a href="https://census.quora.com/Why-dont-people-reduce-overpopulation-1">
              realwages.us
            </a>
            , "FCSU + FCSU *1.2 + mortgage living wage ={space}
            <a href="https://quora.com/nickcarducci">$30k/yr</a>," Chris Hahn
            <br />
            It works and is voluntary, fallow tech, participate in program,
            parent or grand- has to dual-enroll, A product of a teacher is their
            income,
            {space}
            <a href="https://nickcarducciforsenate.quora.com/">
              never physical
            </a>
            <br />
            <br />
            Nick{space}
            <a href="https://bacterium.quora.com/">Carducci</a>- BA in Political
            Science & Economics, Johns Hopkins University (Graduated 2015)
            <br />
            What is the main{space}
            <a href="https://census.quora.com/Whats-wrong-with-the-World-Economic-Forum-1">
              problem
            </a>
            {space}of the USA in your opinion?
            <br />
            <a href="https://electiontechnology.quora.com/What-is-the-main-problem-of-the-USA-in-your-opinion-1">
              GDP is “value-added”
            </a>
            <br />
            <a href="https://phyletic.quora.com/Extortion-Duress-Plea-https-courttechnology-quora-com-Why-should-you-explain-what-you-need-1">
              Self inflicted known hazards, programmatic convictions' customs
            </a>
            <br />
            <br />
            Malfeasance is complicity for login.gov private api now, convict
            intranet with evidence - a witness is not available to acquit when
            no evidence is available to guilt - 180–80; how will that help, is
            it necessary?
            <br />
            <br />
            Benedict Arnold would comport turncoats to ward treasury visa fees -
            working age to boot -{space}
            <a href="https://parcelpolice.quora.com/">illegals are good</a>.
            <br />
            <br />
            Drain the Swamp means medicate the homeless, with a special
            pharmaceutical for each crime.
            <br />
            <br />
            Non-Voters, still hasn't voted, shuffle before extrapolated call,
            you gotta want efficiency, not productivity of "value-added" real
            GDP/yr! JACK DORSEY JAIL FOR LYING TO INVESTORS, disbursements vs
            fiduciary
            <br />
            <br />
            "DOE 2023 tax-payers will reap the benefits of investments by the
            treasury, and saves the consumers money, for efficient-energy,
            reaping the benefits of technological advancement for treasury
            profit." - Frank Pallone. Someone's gotta fucking do it,{space}
            <a href="https://substitutivesupply.quora.com">faggot</a>.
            <br />
            <br />
            "If I was in charge, I would have helicopters deporting. If we did
            that enough, the migrant wave would end." - Rand Paul
            <br />
            <br />
            "Inside-out-of-pocket inflation is only is stopped by{space}
            <a href="https://realecon.quora.com/Why-is-efficiency-necessary-but-not-sufficient-for-economic-growth-1">
              outside-of-pocket, government, structural
            </a>
            {space}and{space}
            <a href="https://www.quora.com/Aside-from-trade-stimulating-economic-growth-which-is-good-for-employment">
              nominal
            </a>
            {space}international trade recession, inflation leads to high
            recession and unemployment."
            <br />
            <br />
            “Germans will not stop buying Russian rig-rates out of the kindness
            of their hearts.”
            <br />“<a href="https://thumbprint.quora.com">We ha</a>..”
            <br />
            <br />
            Use Tranquility as grounds and with reason of efficiency, for
            hypocrisy and discrimination
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/9d1eyexy19d5l3h/Screen%20Shot%202022-04-27%20at%2010.23.15%20AM.png?raw=1"
              }
              float={"left"}
              title="v8 engine - https://github.com/NickCarducci/mastercard-backbank"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
              iframe={{
                frameBorder: "0",
                allowFullScreen: "",
                allow:
                  "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              }}
            />
            1/3 non-vote shows{/**precludes, holds no candle to */} nothing for
            value-added of "old-school fraudulent votes."{/**Dinesh Desouza */}.
            Shuffle before extrapolation?{/**name? 2000mules.com */}
            <br />
            <br />
            Are you willing to pay for outside-of-pocket, government and
            structure real GDP/yr?
            <br />
            Transitory won't make unemployment.
            <br />
            Money in pockets, people in jobs, resources in order to move forward
            <br />
            <br />
            Why is foreign trade unruly? Every government spending is
            contracting? Khasicstan China. Retirement reform that Macron wants
            to bring is not Conservative. Guilty of business old age delinquent
            48% and anti-social 35%. Guilty of business
            <br />
            <br />
            Pioneer legit Greenfield value added tech advancement should
            DEPRECIATE
            <br />
            tough guy, get a pat on the head. impovershment all around, less
            income than a third despondency of expenses, AND AFTER, real wages
            all expense 1/hour-GDP/p. Third party donee beneficiary, by
            {space}
            <b>volume, or abject debit larceny?</b>
            {space}
            Totally without conflict of interest if held to a new plane? That
            plane was on its last leg, warranty and guarantee is my bid.
            <br />
            Can't have my users promise anothers users' tings.
            <br />
            "Terrorists" label cannot be a pretense to fire and discriminate,
            taking law into their own hands. 'value-added' expiring premiums
            save money? rollover, orthopedic surgeon will getcha the
            schizo-bipolar label
            <h4>
              "smart fight, accross the board, we want improvement," - school is
              IN!
            </h4>
            Michael Bloomberg $15m/schools k-12 for teachers/kids' lost time,
            internships for our youngsters, creative, thoughtful, aggressive.
            Keep kids in school 3-7pm to 'ensure they are not in any trouble.'"
            NY Republicans, 7% Dems, the rest non-voters, I am proud to
            represent the people that do not like any of you, John Catsimitidis,
            drop dead!
            <br />
            I'm trying to buy a home, so I will prevent you from mortgaging on
            my surrendered freedom to bid as a third party donee beneficiary.
            The next Republican to tell me "value-added" healthcare insurance
            expiring premium + gov + implausiuble use lease beyond 5 stores and
            condos strunctures will stop inside-out-of-pocket inflation...
            {space}
            <span>
              <a href="https://qr.ae/pvsL4p">
                Did the Federal Reserve admit that inflation is caused by debt?
              </a>
            </span>
            <br />
            <br />
            Menendez is pro-insurance and invoice.{space}
            <a href="https://qr.ae/pvsdaH">I will ban them</a>.
            <br />
            <Cable
              style={{
                height: this.state.openSynth ? "380px" : "0px",
                transition: ".3s ease-in",
                fontSize: this.state.openSynth ? "300px" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://open.spotify.com/embed/track/4P5KoWXOxwuobLmHXLMobV"
              }
              float={"right"}
              title="come as you are"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
              iframe={{
                frameBorder: "0",
                allowFullScreen: "",
                allow:
                  "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              }}
            />
            Corporate profit widfall debentures
            <br />
            Other side of the coin, (BEA value added share of GDP ascertainable
            damage ?){space}
            <a href="https://census.quora.com">m2 home</a>
            <h4>
              <a href="https://www.facebook.com/groups/opengovgroup/permalink/3224415224456718/">
                Open Government - By “real” growth, do you mean standardized
                guarantee schemes, government spending, and structures for
                leases?
              </a>
            </h4>
            I'm injured but they call me schizophrenic-bipolar because equal and
            opposite reaction, bid whom takes ask; 35.4% anti-social, 5.2%
            non-speaking autistic and downs, nearly 48% old muskuloskeletal, 7%
            injured
            <br />
            <a href="https://www.quora.com/unanswered/Can-you-claim-someone-s-mortgaged-home-by-third-party-donee-beneficiary">
              Can you claim someone’s mortgaged-home by third party donee
              beneficiary?
            </a>
            <br />
            <a href="https://anticommunism.quora.com/Does-communism-preach-hatred-of-certain-groups-3">
              Hate from communists
            </a>
            <br />
            Vaccines work, virus is alive, where is your proof?{space}
            <a href="https://qr.ae/pvshas">Just because you found it</a>?<br />
            <h3
              style={{
                float: "right",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                margin: this.state.openSynth && "10px",
                padding: this.state.openSynth && "10px"
              }}
            >
              AOC stopped labor surplus amazon stock
            </h3>
            <a href="https://qr.ae/pvsh8q">anon</a>
            {space}business income
            <br />
            income as a "non profit"{space}
            <a href="https://nextdoor.com/p/kgbkJZqx285M/c/750954594?utm_source=share">
              service
            </a>
            <br />
            cors NFC Motor Vehicle{space}
            <a href="https://qr.ae/pvsGDH">intranet</a>
            {space}will 100% filter out bad eggs, mal-intentioned, as it were.
            3% under $2k
            <h4>
              Acquit judges of appeal fines and hysterical claim whistleblower
            </h4>
            subsidies (gentrification) can create a lot of jobs for surplus
            value or -science/skew, zero-sum science, mining and design loss.
            <br />
            income after expenses real wage, rose 350k, ons 9 years last largest
            fall in real child poverty (less than a third of
            expenses-nationally, income).
            <br />
            <h3
              style={{
                float: "left",
                backgroundColor: "black",
                color: "white",
                borderTopRightRadius: "10px",
                margin: "10px",
                padding: "10px",
                marginBottom: "0px",
                marginLeft: "0px"
              }}
            >
              Royaly%/consumer
            </h3>
            In house duress... mvp duress non-compete
            {space}
            <a href="https://qr.ae/pvsGuI">cornering</a>
            <br />
            I’m no expert, I won’t pretend, I have people onnnnnn. I put people
            on
            <br />
            <a href="https://qr.ae/pvsGu5">
              <Cable
                style={{
                  transition: ".3s ease-in",
                  width: this.state.openSynth ? "" : "0px"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/xqlukof0wi27g4q/Screen%20Shot%202022-04-12%20at%204.33.17%20AM.png?raw=1"
                }
                float={"left"}
                title="Econ Zealot 15 yr old"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.openSynth && this.state.scrollTop}
              />
            </a>
            <h4>
              reverse amortization - (cash/debt)*income, fines for no
              resolution? hysterical known hazard{space}
              <a href="https://qr.ae/pvsG50">claims</a>, bond loss profit - per
              diem incarceration
            </h4>
            Don't{space}
            <a href="https://qr.ae/pvsGkP">reneg</a>
            {space}on debt for producers keep credit.
            <br />
            Deal is a{space}
            <a href="https://digitalcommons.law.uw.edu/cgi/viewcontent.cgi?article=1260&context=wlr">
              deal
            </a>
            {space}in my book,{/**Chris */}
            <br />
            Kids don't need{space}
            <a href="https://qr.ae/pvsGqs">services</a>, you need to stop{space}
            <a href="https://qr.ae/pvsGqi">taking</a>. Kids should be at work.
            {space}
            laborless-income.
            <br />
            Viruses tend to spread faster on what{space}
            <a href="https://qr.ae/pvsTGZ">evidence</a>? You just claim virus
            inseminates cell by presentation, non-exclusive or asymptomatic, you
            fucking choose{space}
            <a href="https://www.quora.com/What-is-schizo-economics">retard</a>
            <br />
            <br />
            Inequality literally{space}
            <a href="https://qr.ae/pvs1Sy">
              shouldn't happen, these are averages over time, not upwardand
              downward moving individuals
            </a>
            {space}working for a living-surplus for leisure. -science/skew is
            zero sum, inventory form is not substitutive-supply by mining or
            design
            <h4>
              <a href="https://qr.ae/pvs1ZD">
                rollover hysterical expiring-premium-insurance claims
              </a>
              , brown
            </h4>
            <h3
              style={{
                float: "right",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                margin: this.state.openSynth && "10px",
                padding: this.state.openSynth && "10px"
              }}
            >
              messy{space}
              <a
                href="https://repealbakeract.quora.com/"
                style={{ color: "white" }}
              >
                hair
              </a>
              {space}frivalous malfeasance
            </h3>
            -bitch (Yasmeen Memon, MD; Long Branch, NJ)
            <br />
            is{space}
            <a href="https://www.njconsumeraffairs.gov/statutes/consumer-fraud-act.pdf">
              this
            </a>
            {space}not oxymoronic?
            <br />
            <br />
            <span role="img" aria-label="construction-tan">
              👷🏽‍♂
            </span>
            <a href="https://saverparty.xyz/global">
              india, the worlds, 6th largest national economy
            </a>
            <br />
            <span role="img" aria-label="timer">
              ⏲
            </span>
            (?)56:8-74. Warranty given as a matter of law
            <br />
            If a dealer fails to give a written warranty required by this act,
            the dealer nevertheless shall be deemed to have given the warranty
            as a matter of law, unless a waiver has been signed by the consumer
            in accordance with section 7 of this act.
            <br />
            L.1995,c.373,s.8.
            <br />
            <span role="img" aria-label="construction-worker">
              👷‍♂️
            </span>{" "}
            56:8-106 Immunity from liability for third party, exception
            <br />
            A third party shall not be liable for an unlawful practice under
            section 2 of this act unless there was an agency relationship
            between the person who engaged in the home solicitation and the
            third party.
            <br />
            L.2000,c.125,s.3.
            <br />
            <br />
            What is something that you just realized? Obamacare doesn't actually
            save money, it targets mean inflation off non-substitutive-supply (
            <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/">
              hysterical
            </a>
            {space}pool, implausible invoice, surrendered bid)
            <br />
            <h3
              style={{
                float: "left",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                margin: this.state.openSynth && "10px",
                padding: this.state.openSynth && "10px"
              }}
            >
              <a href="https://qr.ae/pvshbL" style={{ color: "white" }}>
                Warranty
              </a>
              {space}is implicitly a surrendered bid
            </h3>
            stop (<a href="https://qr.ae/pvs1wB">hysterical-</a>) scapegoating
            {space}
            <a href="https://repealbakeract.quora.com/">pervert</a>. sliwa, do
            you want to{space}
            <a href="https://pubmed.ncbi.nlm.nih.gov/12049024/">watch</a>?<br />
            PCE-CPI is an ascertainable loss to economic welfare, 1/hour-GDP/p,
            efficiency. "We need demand for our products," we need substitutable
            supply, exports for Roubles, state-lands, rig-rates royalty% local
            consensus permit wastewater NWP12
            <br />
            <br />
            "Half the returns are from interest, not capital gains," Payne
            Capital Management
            <h4>
              <a href="https://www.fbi.gov/file-repository/2020-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
                Kiddie trafficking
              </a>
              {space}and NFC Motor Vehicle liable
            </h4>
            <a href="https://humanharvest.info/polio">Covid</a>
            {space}
            <a href="https://qr.ae/pvKju9">protection</a>
            {space}or go back, mass illegal{space}
            <a href="https://vaults.biz/immi">immigrations</a>, they could have
            at least used Title 42 as a scapegoat, he gutted all protections
            that protected us from competitive commerce substitutive supply for
            labor-demand of other markets and economic welfare, 1/hour-GDP/p
            {space}
            <a href="https://teapharmacy.party/drugs">
              fentanyl 2013-15 demand refinery
            </a>
            .
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/o82ytz5hq42cq9c/Screen%20Shot%202022-04-08%20at%204.57.25%20PM.png?raw=1"
              }
              float={"right"}
              title="Daily Wire"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h3>
              You can check id but you cannot prevent commerce with treasury
              fees, you haven’t even inseminated cell,{space}
              <a href="https://saverparty.xyz/racists">spic</a>
            </h3>
            Population growth is 1%/yr+, even if supply is not substitutive by
            labor-demand, the cause of price rises 5%/yr+ is obviously because
            of
            {space}
            <a href="https://realecon.quora.com">5%APR</a>
            {space}20 yr mortgage. Communism prohibits leasing inventory, must
            sell outright to not infringe on others rights, labor-borne.
            <br />
            <br />
            Jeffrey Burney - people are cold homeless and hungry under
            communism. And also under most communist systems ownership of
            private property is banned so owning your own home you couldn’t do
            that legally￼
            <br />
            <br />
            Communism deprives no man of the power to appropriate the products
            of society; all that it does is to deprive him of the power to
            subjugate the labour of others by means of such appropriations.
            <br />
            <br />
            Jeffrey Burney - And who enforces those laws if it deprives no man
            of power?
            <br />
            <br />
            in contract law, you aren’t allowed to invoke a third party donee
            beneficiary. Please, if you think stealing in contract is ok, leave
            me alone
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/dfhn4x10zmbsnpl/Screen%20Shot%202022-04-08%20at%204.26.43%20PM.png?raw=1"
              }
              float={"left"}
              title="Newsmax"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            “Imagine what could have been done with $6m to buy food for black
            communities.” Is what the right is concerned about instead of
            suspending larceny in contract
            <h4>
              "<a href="https://qr.ae/pvKzFP">Are you an economist?</a>" no for
              I am
              {space}
              <a href="https://qr.ae/pvKzoA">diligent</a>:{space}
              <a href="https://qr.ae/pvKzoO">Giffen goods are for rounding</a>.
              Estimates until negative margin.
            </h4>
            <a href="https://qr.ae/pvKzKY">$400 average</a>, copy and mortgage
            or loose inventory debenture o' corporate or treasury
            <br />
            <br />
            46m student loan, 27x less own a business, locker room talk uh uh uh
            (the people that don’t support the war likely fled the country,
            look, they closed instagram, YouTube, these people don’t want to be
            part of the info, but they cannot really hide it.
            <h1>A hysterical claim benefits team</h1>
            We know sewage is cross ref US-India age at death
            <h2>
              They cancel debt without collateral because that is the only way
              lenders get{space}
              <a href="https://quora.com/nickcarducci">paid</a>.
            </h2>
            "Provide charter schools, not public schools, D.C. teachers' union
            bond income secession" - "Sitwell Friends Aca"
            <br />
            Steve: “Philosophy clarifying disease KBJ etymology define women
            Anomic aphasia.”
            <br />
            GK: "That was an ideology sir, not a defect,
            <br />
            'Man,' Xavier Bacerra could’ve, too.
            <br />
            Here, first blush, 'Produce eggs or give birth and constitutionally
            designed for caring and nurturing. Hormones goes either way.'
            <h1>substitutive-supply: you should say inventory, dunce</h1>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/a58xc54z756k4cc/Screen%20Shot%202022-04-07%20at%2012.53.12%20PM.png?raw=1"
              }
              float={"right"}
              title="Oil yahoo finance congressional "
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h1>
              “Bioengineered virus, no sanctions, is criminal.” Charlie Kirk,
              Never have we proven virus is even correlated let alone inseminate
              a cell
            </h1>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/2fxg219cecun0ue/Screen%20Shot%202022-04-07%20at%2012.17.27%20PM.png?raw=1"
              }
              float={"left"}
              title="Newsmax - Imports are a wash and if not tape-painting it is only so for lower prices per barrel, it is cheaper labor abroad and that surmounts any repatriation effects of self-harm inflation by printing for what is left of $1.8t/yr debt spending and $2t currency outside fed banks and checking (before 3/2020, now checking +$5t more)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            51% tax on sports betting in NY absurd. That really{space}
            <a href="https://qr.ae/pvKVEM">prevents</a>
            {space}market
            <a href="https://qr.ae/pvKVBs">liquidity</a>. We need truncated
            production tax to abide by equal Article 1.8 bond-tax and
            trust-break the treasury. 3% under $2k geohash/month + 2 week public
            review naming and open source
            <br />
            <br />
            <a href="https://quora.com/nickcarducci">
              A topic is not a publication
            </a>
            , that which is under the same guise as a newsfeed, that which would
            have to pay writers or exchange said non-descriptive title, that
            which is subject to peer review.
            <h4>
              All my friends work for banks; attorneys never finish the job;
              sales won't mention competition for moat
            </h4>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/5m39d7dr0owsxl8/Screen%20Shot%202022-04-06%20at%209.58.41%20AM.png?raw=1"
              }
              float={"right"}
              title="GBNews"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "What is the profit difference between what goods are sold for and
            what they actually cost to make? Marxism refers to as a 'surplus
            profit.'"
            <br />
            Alexandra Engle - Go read Adam Smith. He defined it before Marx and
            in this instance of surplus profit [division of labor - comparative
            advantage - skills trading - nationalistic-retardation], Marx's
            ideals and theory fail miserably in application. No communist
            country has ever increased the wages of the state employees because
            they profited more. They shoved it in their pockets and made a very
            select few rich.
            <br />
            Nick Carducci - Communism deprives no man of the power to
            appropriate the products of society; all that it does is to deprive
            him of the power to subjugate the labour of others by means of such
            appropriations.
            <br />
            <br />
            Alexandra Engle - Exactly my point. Marx's idea failed. The USSR
            meant that Stalin and a select few subjugated everyone else's labor.
            In North Korea, not a select few but a family, more dynasty than
            Marx's concept. China? Ditto until they decided to open up their
            economy to the global economy, and even then Jack Ma paid the price
            of flying too high.
            <br />
            Thanks for quoting only to prove my point.
            <br />
            <br />
            Nick Carducci - Vulgar socialism (and from it in turn a section of
            the democrats) has taken over distribution as production[, not
            productive-ward]. After the real relation has long been made clear,
            why retrogress again?
            <br />
            <br />
            Marx was dead by then, never the governor.
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/i2gdhv2so3a4i4p/Screen%20Shot%202022-04-06%20at%208.54.16%20AM.png?raw=1"
              }
              float={"left"}
              title="GBNews"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h3>"14 employees, not bad"</h3>
            Nick Carducci - BA in Political Science & Economics, Johns Hopkins
            University (Graduated 2015)
            <br />
            "Why do people ignore the really good economic news on growth and
            unemployment and are obsessed with only inflation?"
            <br />
            GDP and “unemployment” are metrics for expenses and less hours
            worked
            <br />
            consider that the economists in charge of quora moderation cannot
            get their story straight on what unemployment and inflation means
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/w43q5w74w575vu9/Screen%20Shot%202022-04-06%20at%208.45.18%20AM.png?raw=1"
              }
              float={"right"}
              title="GBNews"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Taxes for the last price rise is woefully inadequete." What the
            actual fuck Adam
            <br />
            <br />
            Asymptomatic testing has{space}
            <a href="https://qr.ae/pvKP1x">proven noncorrelation</a>,
            immunocompromised CDC says lymphoma onconogenic, "no-problem."
            <br />
            Compound estimates cannot garner more than over negative margin
            <h2>
              "Something is guaranteed to break, so you need CarShield," Bill
              O'Reilly to pool money together to make prices hysterical
              {/**PCE-CPI gain or loss? Getting away with murder*/}
            </h2>
            "They knew what they were doing when they were taking out the loan,"
            Bernie McGerk, it is{space}
            <span style={{ color: "purple" }}>
              (“A loan system where they are effectively forced to borrow
              money,” Liam Halligan - 4/6/2022), foreseeable impossibility, and
              larceny in contract
            </span>
            . "The ones that really need it, they can get 'loans,'"
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/2anogwle61sgfv3/Screen%20Shot%202022-04-06%20at%207.49.40%20AM.png?raw=1"
              }
              float={"left"}
              title="Newsmax"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Megan Kelly, loans have collateral bitch, and lending is not
            necessary for anyone, they always{space}
            <span style={{ color: "purple" }}>
              prevent negotiating of starving producers
            </span>
            and{space}
            <span style={{ color: "purple" }}>
              makes a moat of -science/skew trade secrets
            </span>
            , yet max-royalty can work instead, vertical induatry line revenue
            skimping totious, and (cash/invoices)*income
            <br />
            <br />
            Open the borders! Stop via fees? Labor shortage?{space}
            <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/">
              Most Americans do not like any insurance
            </a>
            . Substitution of labor-demand of other markets is not to be
            prevented by hysterical claims for invoices, surrendered freedom to
            bid, another larceny in contract, for third party donee beneficiary
            <br />
            <br />
            How about a financial system that Saves the dollar?, Mark Steyn??
            <h1>
              “Sex attack, awkwardness, is kept in rubber room.” Rudy Giuliani
            </h1>
            evidence should be immediate or aquit.
            <br />
            "The able Ashlene McDonough, this hearing is adjourned." In
            reference to old-age delinquency known hazard disability. what were
            they doing when they were able, gambling their savings? or is it
            because you are malfeasant in preventing larceny in contract
            mortgages of labor-borne demand, not hysterical invoices? Also in
            reference to presumption that someone is hireable for something
            they've never been hired to do. I have applied to thousands of
            applications and they are more willing to cite my mental acuity as
            non-hireable than my actual laceration, the bitches call the divot a
            scar, that is by definition skin alone, and if not, that is the
            point! Stop giving 35.4% OCD disability! 5.2% are actually tarded.
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/ex2rn28axlfd4bq/Screen%20Shot%202022-04-05%20at%203.07.20%20PM.png?raw=1"
              }
              float={"right"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Marx said Communism forces sales outright, never lessing inventory,
            certainly PCE-CPI ascertainable, estimate down by negative margin,
            nor beyond plausible use of 5 stores and condos per rental-income
            account-payable.
            <br />
            You are the nut, GDP/hour and non-rollover insurance is bizarre and
            illegal by EULA standards
            <br />
            trauma is a known hazard, stop hysterical claims
            <br />
            how is a voluntary action a disorder? even hysteria is rational
            <br />
            opiate and drug dependency in tribal and rural entertainment
            <h1>
              "Don’t accept Putin as an adequate person, he has no self-care"
            </h1>
            <h3>
              Ween cops off bond loss profit; involuntary support address whose
              issues? Bipartisan Summer Hour Prevention Treatment and Recovery
              act, funded support without voluntary customers, "ive seen
              traumatized families," they cannot force treatment either, even if
              they ;ay for it
            </h3>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/5ff6zxjoyoppstc/Screen%20Shot%202022-04-05%20at%203.01.34%20PM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            domestic violence is not because of brains, especially if you admit
            change-rate between lockdown and non
            <h1>Open the border</h1>
            Vote Saver party{space}
            <span role="img" aria-label="bottom-left white-circle squirrel">
              ↙️⚪️🐿
            </span>
            {space}
            to reverse the general fund (cash/invoices)*income. Old people are
            delinquent, 35.4% OCD SSA FRAUD
            <br />
            Revenue skimp vertical industry line can replace future debt
            relations
            <br />
            <br />
            All cause (?) time is a great healer
            <br />
            $5t in “fed banks,” whatever that means, $2t outside = $3t household
            top 50%, $2t corporate, $1.5t “non-profit?”
            <br />
            Reverse it don’t let universities keep
            <h3>you exaserbated income inequality after expenses</h3>
            Bottom 50% after expenses have $200b/$7t checking, after $5t
            pandemic checking mortgage
            <h4>
              <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/">
                Most Americans do not like any insurance
              </a>
            </h4>
            What does $2t currency and checking "outside fed banks" even mean?
            Who are these people with $5t in fed banks? how does $2t outside
            checking, currency, make for $21t GDP/yr? PCE-CPI certain loss!
            <h1>taxes for invoices</h1>
            Corporates will now fuck 2010 profit balance for shareholders,
            watch.
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/10qjfxcmbqqb3l9/Screen%20Shot%202022-04-05%20at%202.06.52%20PM.png?raw=1"
              }
              float={"right"}
              title="Obama ACA Newsmax"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Medicare original didn't provide all the benefits that it does
            today," advancement -GDP/p claiming credit?
            <br />
            “Denying coverage based on labor-bid rights over hysterical claims
            on expiring premiums.” Pay for prescriptions, fall through cracks,
            working families pay for coverage. As part of the American Rescue
            Plan he made it affordable to buy healthcare." $5t after expenses
            went to the filthy rich, $1.5t "non-profit" ...not, $2t corporate,
            $3t top 50%, $200b bottom (launder debt)
            <br />
            <br />
            GDP/hour is productivity is bizarre; standardized hysterical claims,
            taxes for invoices, how about surrendered freedom (EULA) to bid for
            economic welfare, 1/hour-GDP/p? Starve the suppliers so they lower
            costs instead, you nut. PCE-CPI insurance certain loss,
            prescriptions for naming and open source, why at all. Reverse the
            general fund, (cash/invoices)*income; Tranquil and voluntary trade
            Article 1.8 oxymoronic bond-tax (out of scope trust breaking
            hypocrisy, free rider mutable laborless-demand and gentrification
            instead of streamlining labor-equity?
            <h2>Older American delinquency by gaming - kill them all</h2>
            Samsa as a function of pandemic (500k/yr excess is less than
            expected, and any change per single-year death rate is significant
            with n=2019-20 sample{"<"}100 devoid of meaning)
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/nhhrb2alcpishzf/Screen%20Shot%202022-04-05%20at%201.20.47%20PM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            “Rural access to mental health service is such a challenge,” for a
            reason, because you have prescriptions instead of open source and
            naming producers, any consumer surrogate investor shouldn’t generate
            income for monopoly government, that includes non-profits
            monopsony/gentrification (max-royalty industry-vertical line NAICS,
            no more counterfeit/larceny/licensures nor kinky animal testing)
            <h3>The economics (or lack thereof) of pharmacies</h3>
            “Individuals struggling with substance use.” Leave us alone, bitch,
            if we use we don’t struggle, we like it. You still arrest and fine
            for DUI with weed when daily use and accidet shows same
            presentation? We can all concentrate with cocaine, and{space}
            <a href="https://teapharmacy.party/drugs">fentanyl</a>
            {space}is useful if you would just resist trust breaking hypocrisy
            of FDA/USPTO/NIH for less economic welfare, 1/hour-GDP/p by division
            of labor comparative advantage.
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "100%" : "0%"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/jtqglqlpcek4jvk/Screen%20Shot%202022-04-05%20at%201.04.35%20PM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h1>
              people{space}
              <a href="https://2024nj.com/nypd">murder and steal for money</a>,
              stop scapegoating your poor stewardship of labor-equity on
              people's brains or voluntary drug use, or will to die after
              definancialization (cash/debt)*income, geohash/month + 2 week
              public review truncated production tax & 1/12 vertical line
              revenue skimping
            </h1>
            "We must invest in prevention strategies and suicide efforts." Oh
            yeah? D.A.R.E. showed MORE voluntary drug use
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/dkafbx0wnvuagcz/Screen%20Shot%202022-04-05%20at%201.13.59%20PM.png?raw=1"
              }
              float={"right"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            We know a lot more than we did before. In fact, the Surgeon General
            says that the lockdown have had a devastating impact on
            [self-reported??? Or involuntary committment for prejudice of “he
            pushed me.”] whistleblowers of standardized hysterical claims of
            expiring premiums laborless demand invoice surrendered bid, now!
            <br />
            "What is being done to ensure mental health and substance abuse
            disorders that resulted from madated school closures (timing but
            all-cause? artifact is not scientific, need CT scan exclusive cause,
            at least)
            <br />
            <br />
            Why would you not allow me to do my own physical therapy? Brett
            (RiverviewMdCtr treating muscle laceration with slander, with messy
            hair diagnosis and rollover insurance relenting?) was a waste of
            space
            <h1>
              this pussy condones 35.4% disability awards for anti-social,
              age(delinquency/gaming) and obesity (25% of 19% of 19% honest)
            </h1>
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/m6lyghhrgzchz83/Screen%20Shot%202022-04-05%20at%2012.51.37%20PM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Physicians and mental health professionals must face these issues,"
            we are voluntary-users! Leave us alone, creep!
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/myajowrgkx0hrj8/Screen%20Shot%202022-04-05%20at%2012.42.32%20PM.png?raw=1"
              }
              float={"right"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            “Well-being is important to be in school and that has been a
            priority for NIH.”
            <br />
            Doesn’t sound very scientific. Education pays, but it isn’t
            required. Trade-secret job farm - indoctrinating misinformation like
            {space}
            <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">
              GDP/hour
            </a>
            {space}is a measure of productivity, or that{space}
            <a href="https://www.bls.gov/osmr/research-papers/2017/st170010.htm">
              providers'
            </a>
            {space}
            <a href="https://realecon.quora.com">certain loss</a>
            {space}helps
            <h1>
              Free Britney, increase economic welfare,{space}
              <a href="https://realecon.quora.com">1/hour-GDP/p</a>.{space}
              <a href="https://www.bls.gov/spotlight/2011/schools_out/">
                School is in*
              </a>
            </h1>
            Payee needs management to net worth concurrentable negative over
            personal debt with no collateral? Discover, Citi, Wells Fargo, and
            Chase are IDIOTS for it. No better than Floyd
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/x6dihu6c476myvq/Screen%20Shot%202022-04-05%20at%2012.37.48%20PM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Barriers to{space}
            <a href="https://courttechnology.quora.com">Reimbursing</a>
            {space}providers," and $5t checking mortgages 50-90%, 90-99%, 1%,
            501(c)(3) (?), corporate, and $200b for bottom 50%, but you lowered
            poverty, after expenses, right?
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/yuy69o77cee3lkj/Screen%20Shot%202022-04-05%20at%2012.19.25%20PM.png?raw=1"
              }
              float={"right"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h1>
              Opiod Use and Disorder Act: How to run a{space}
              <a href="https://teapharmacy.party/drugs">
                government drug cartel
              </a>
            </h1>
            <h4>
              "suicide by mental health conditions, a statistic I want to
              change," leading cause of death and disability is actually
              gluttony. mandate preg test for fatties, today
            </h4>
            Need assistance at the community level (involuntary "crisis support"
            intervention) But 65% mortgage and loiter, so I can "
            <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/">
              trespass
            </a>
            ."
            <br />
            <br />
            Rural (TARGET MARGIN CUSTOMER SURROGATE BY VERTICAL LINE SKIMPING,
            no more direct loan nor loose collateral but for (cash/debt)*income
            naked swimmers
            <br />
            teletherapist and psychiatric prescription commerce prevention with
            NFC Motor Vehicle naming and open source + 2 week public review
            <h1>a disorder without an unknown hazard</h1>
            "We would like to concentrate on{space}
            <a href="https://youtu.be/WlSVwRaO-iQ?t=559">
              housing people with substance usage
            </a>
            {space}
            beyond vig for doctor"
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/p443pperkposxo1/Screen%20Shot%202022-04-05%20at%2012.01.01%20PM.png?raw=1"
              }
              float={"right"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h1>
              Emotional disturbance and OCD is fraudulent disability;
              homelessness is because of LESSING NEVER OUTRIGHT sales,
              prescription preventing commerce; drugs are used because WE LIKE
              THEM - name and open source fentanyl dealers for purity (DO NOT
              BAN VOLUNTARY ACTION WITH PREJUDICIAL HARM, real standing
              notwithstanding)
            </h1>
            If someone wants to use opiods with known hazards, fucking let them,
            you don't need to scapegoat for reason to have healthcare records
            obliged by Access to data inherently-required
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/m2gkk8l3kq2ws4k/Screen%20Shot%202022-04-05%20at%2011.48.55%20AM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            $5m/ school-based health center gentrification, primary-care in
            accessible location, $25m 125 awards to hospital funds, if there is
            no labor-demand, there is no labor-borne-demand, 1/hour-GDP/p, just
            busy-work in higher prices, 1y/-1x. This is Economics 101
            <br />
            <br />
            Substance use disorders, how is that scientific if it is voluntary
            and you have no cause but their free will, with no victim to boot
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/ybrl4geio25zmea/Screen%20Shot%202022-04-05%20at%2011.44.10%20AM.png?raw=1"
              }
              float={"right"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h1>You will watch me do fentanyl, faggot</h1>
            family-based critical approach, non-compete payee mortgage loitering
            spending larceny in contract over surrendered freedom (EULA) is due
            for mediation and malfeasance for violent-insurrection.
            <br />
            involuntary intervention is what wwe need by our own decisions, you
            absolute cunt.
            <br />
            <br />
            Substance use crisis because of pandemic or lacing marijuana and
            heroine? 501(c)(3) can hold assets year to year or not? I'm going to
            kill John Sarbines for starving people of substituting for supply by
            labor-demand of other markets.
            <br />
            <br />
            behaviorial and substance use (
            <a href="https://truncatedsalestax.com/gov">
              INVOLUNTARY COMMITMENT
            </a>
            {space}FOR TRESPASS ON IMPLAUSIBLE USE LEASE AND STANDARDIZED
            HYSTERICAL CLAIMS), or government-pharmacy-cartel-debenture due for
            carfacing
            {space}
            <a href="https://billbiden.org">the President</a>?<br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/gzmg9alrysup6bt/Screen%20Shot%202022-04-05%20at%2011.33.40%20AM.png?raw=1"
              }
              float={"left"}
              title="'Communities in Need: Legislation to Support Mental Health and Well-Being' (Youtube) Energy and Commerce Committee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Standardized prescription guarantee FDA/USPTO/NIH self-dealing.
            Mental-health (21) bipartisan (60/100) bills, $1b/yr 2014-2016, we
            paid for it with offsets, with someone interested in Tesla over
            Twitter. People on the strets has nothing to do with mental health,
            that is subjective as to what{space}
            <a href="https://">qualifies</a>
            {space}healthy, for we can all concentrate with cocaine; they claim
            marijuana and heroine lacing contributes to the deaths of{space}
            <a href="https://teapharmacy.party/drugs">fentanyl</a>, so then
            dismantle FDA/USPTO/NIH and name and open source
            <br />
            <br />
            1/hour-<a href="https://vaults.biz/gdp">GDP/p</a>
            {space}is[ my equation for]{space}
            <a href="https://fred.stlouisfed.org/graph/?g=NSCH">
              economic welfare
            </a>
            <br />
            <br />
            "charging stations is not for poor people," because of{space}
            <span style={{ color: "purple" }}>upgrade costs</span>. estimates
            down good until margins are negative then we move on, direct loan by
            vertical line skimping instead of debenture{space}
            <span style={{ color: "purple" }}>washing</span>, but trasaction fee
            naming and open source, conscription especially bond loss profit is
            war crime, especially if it washes.
            <br />
            How many? Put it on a chart for both Russian and Ukrainian deaths?
            Don’t need to castrate pedo just allow e2e on device for intranet
            NFC Motor Vehicle bridge toll
            <h1>
              How can you trust them after $5t only $200b for bottom 50% over
              $2t debenture of treasury
            </h1>
            {space}
            <span style={{ color: "purple" }}>
              debenture income non-fungible debit-share
            </span>
            {space}fraud, 501(c)(3) 3yr consecutive account fraud
            <br />
            <div style={{ borderLeft: "3px solid", marginLeft: "4px" }}>
              For most organizations, an activity is an unrelated business (and
              subject to unrelated business income tax) if it meets three
              requirements:
              <br />
              <br />
              It is a trade or business,
              <br />
              It is regularly carried on, and
              <br />
              It is not substantially related to furthering the exempt purpose
              of the organization. There are, however, a number of
              modifications, exclusions, and exceptions to the general
              definition of unrelated business income.
            </div>
            <h4>
              What about profits on{space}
              <a href="https://www.irs.gov/charities-non-profits/unrelated-business-income-tax">
                Related Business
              </a>
              {space}beyond margin?
            </h4>
            {/*Select words dragon on the ground - plattitudes */}
            -science/skew{space}
            <span role="img" aria-label="shrug">
              🤷🏽‍♂️
            </span>
            {/**elon shrugs about debt */ space}
            how $4b with no cash and $500b?{space}
            <span role="img" aria-label="shrug">
              🤷🏽‍♂️
            </span>
            {space}pitfall all Messy hair{space}
            <a href="https://saverparty.xyz/racists">racism</a>.{space}
            <span role="img" aria-label="bottom-left white-circle squirrel">
              ↙️⚪️🐿
            </span>
            Saver is for{space}
            <a href="https://vaults.biz/immi">open borders</a>.
            <h4>
              The Treasury cannot afford it, other than legal tort, why can’t
              the Federal Reserve? $1.8t/yr debt spending $2t currency outside
              fed banks sufficed 2010–3/2020, already ridiculous.
            </h4>
            “On the autism spectrum learning to speak.” Lee Zeldin has never met
            an Autistic person, there is communication but a large portion
            cannot talk. How wide is the spectrum? Any studderer? Anyone who
            cannot have income equality? We must have quality skew, for at least
            appreciating utiliuty/indifference quality, won't you?
            <br />
            Nonconcurrentable collateral
            <br />
            If Ukraine supplies 70% of EU's grain-inventory, cannot they{space}
            <a href="https://nextdoor.com/g/b5t1jo2tp/">
              share split their Hrynvia
            </a>
            {space}("pussy!") ?
            <h4>
              Wouldn't it be nice if we had self-care and{space}
              <a href="https://markethistory.quora.com">
                housing without medicating
              </a>
              ?
            </h4>
            {/*"not a criminal if it isn't their gun," Thanks for joining us*/}
            Crime is because of larceny in contract and pharmacy, “our way of
            life.”
            <h4>
              'We are already facing and unpr. incr. in migrants/yr, and it will
              only get worse if the Admin ends virus scapegoating'
            </h4>
            <Cable
              onError={handleScollImgError}
              img={true}
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "100%" : "0%"
              }}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/1jrwqlc46pujlm1/Screen%20Shot%202022-04-05%20at%208.24.52%20AM.png?raw=1"
              }
              float={"left"}
              title="Title 42, 'until we have comp, bi, imm reform that commits to securing and pathway for quality'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "WE CAN ONLY TAKE IN AN INFLUX OF MIGRANTS WITH QUALITY{space}
            <a href="https://vaults.biz/immi">IMMIGRANTS</a>
            {space}ONLY," Booker and Menendez
            <h1>
              <a href="https://qr.ae/pvKwDH">GDP: The Big Lie</a>
            </h1>
            Acsertainable loss and Mark Halperin ("conservative") says it is
            access like Stephen Moore says subsidies gets you more and the same
            time inventory scarcity isn't substitutive for labor-demand of
            another market.
            <br />
            “Want insurance to be available to more people.” Only for invoices
            does taxes and claims become mean inflation equilibrium for
            standardized guarantee is bid of laborless-demand, like:
            <h1>
              Elon Musk can{space}
              <a href="https://www.quora.com/How-much-money-does-Elon-Musk-have-in-liquid-cash">
                buy twitter while in debt
              </a>
              ? I can default after selling inventory and home loan personal buy
              things
            </h1>
            <h3>
              cops chase or else until unreasonable what can you do? self care
              is being comfortable in your own skin, subsidize member cash
              advances. It can always be reversed, (cash/debt)*income $5t
              checking mortgages, bottom 50% got about $200b Why does $2t
              outside fed bank and $5t checking,{space}
              <a href="https://qr.ae/pvKwDx">$200b about bottom 50%</a>
            </h3>
            "invisible hand happens," in division of labor, without
            laborless-demand, public safety by pharma cartel, whistleblowers of
            standardized guarantee certain loss off jury
            <h3>
              the greater good, ensuring no science can be charged by loose
              inventory{space}
              <b>loose-debenture</b>
              {space}indices
            </h3>
            How is $2t currency in circulation outside fed banks but $7t
            checking in household, nonprofit and corporate accounts
            <br />
            "Welfare benefits, people addicted to drugs does to society," who is
            the victim?, faggot? Loitering? Stop scapegoating prosecution.
            Invasion is not commercial people, who are more peaceful, treasury
            fees for visa is not necessary. "Coming to NY Chicago," Mark
            Brnovich, those are working age, the Republicans always blame their
            own policies on the faults of illegal immigrants, who are more
            peaceful
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/xwcn37f6t6c81f0/Screen%20Shot%202022-04-03%20at%205.05.44%20PM.png?raw=1"
              }
              float={"right"}
              title="Another Trump 'Save America' Rally"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "Biden Triggered massive inflation,"{space}
            <a href="https://courttechnology.quora.com">
              you added $5t to top 50% for mortgages above $2t currency that
              used to match...
            </a>
            . When is that ever relevant? superfluous free rider mutable greed
            <div
              style={{
                color: "khaki",
                borderRadius: "10px",
                margin: this.state.openSynth && "10px",
                padding: this.state.openSynth && "10px",
                backgroundColor: "forestgreen",
                border: "3px solid"
              }}
            >
              Demand{space}
              <a href="https://qr.ae/pGjU9D" style={{ color: "white" }}>
                efficiency
              </a>
              {space}by being borne of labor{space}
              <a href="https://markethistory.quora.com">name your price</a>
              {space}hysterical tort or debenture of loose inventory that is
              larceny in contract of anothers’ labor, measured by expenses
              {space}
              <a href="https://vaults.biz/work" style={{ color: "white" }}>
                per hour
              </a>
              , or
              {space}
              <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">
                productivity
              </a>
              .
            </div>
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/7rjo4v0o2h8mceh/Screen%20Shot%202022-04-03%20at%201.25.41%20PM.png?raw=1"
              }
              float={"left"}
              title="'Heating or Eating?' asked Former MPs on GBNews and the Authoritarian-Libertarian Cheeseit"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            “National debt of $20t and GDP of $21-22t,{space}
            <a href="https://billbiden.org">Joe Biden</a>
            {space}
            <a href="https://qr.ae/pvKAa9">dug us into one Hell of a hole</a>.”
            Borrowers loiter, lenders surrender loose inventory or hysterical
            claim.
            <br />
            “Very much engaging with car plants.”
            <h1>
              <a href="https://qr.ae/pvKAFN">Truncated Production Tax</a>
              {space}&bull;ween cops off bonds/royalties, name and open source,
              {space}
              <a href="https://qr.ae/pvKAFh">
                hysterical name-your-price torts
              </a>
              , surrendered{space}
              <a href="https://qr.ae/pvKAPp">bid to negotiate by labor-borne</a>
              .
            </h1>
            "They{space}
            <a href="https://qr.ae/pvKAHH">
              needed to pay (in hours,{space}
              <i>
                Principal from interest instead of max-royalty is impossible
                (laborless-demand notwithstanding)
              </i>
              )
            </a>
            {space}for food or people aren't{space}
            <a href="https://qr.ae/pvKACl">interested</a>
            {space}in{space}
            <a href="https://qr.ae/pvKAFd">investing in treasuries</a>." Low
            unemployment, and relatively{space}
            <a href="https://qr.ae/pvKhqc">high growth rate</a>
            <br />
            <br />
            You are always unable, foreseeable impossibility is a debenture,
            that has loose inventory to sell, pay then default, or $5t for
            mortgages checking over currency, during Trump
            <br />
            Stand up vault share with transaction fee and{space}
            <a href="https://vaults.biz/sdr">spoofable</a>
            {space}
            <a href="https://qr.ae/pvKAM1">geohash/month</a>
            {space}+ 2 week public review, naming andarrayOfnumbers open source,
            get Article 1.8 unequal bond-tax, most of 2.8m continuing claims 50+
            people FDA/USPTO/NIH
            <br />
            1% 90-99% 50-90% nonprofits, which defeats the name, and corporate
            <br />"<a href="https://qr.ae/pvKAM7">Nazis</a>,{space}
            <a href="https://qr.ae/pvKt09">employers of middle class</a>"
            <br />
            Customs forceFX not market. illegal to not take U.S. dollar, that is
            current U.S. law (notwithstanding Tranquil and voluntary trade for
            1/hour-GDP/p economic welfare reasoning)
            <br />
            Since Kingdom came
            <br />
            <br />
            You cannot have funds garnished as they come in from a third partty
            donee beneficiary's surrendered freedom to bid, nor foreseeable
            impossibility until then. There is $88t debt and $2t currency, so
            why would anyone be garnished before everyone is? The only mediation
            between Saver and lesser is (cash/debt)*income
            <br />
            <br />
            These{space}
            <a href="https://qr.ae/pvKt09">profits</a>
            {space}need to be delivered to shareholders evenly, not income
            increases. Then we can reverse amortize income (as profits, is,
            too), (cash/debt)*income.
            <br />
            It’s like first it was municipals, then it was corporations, now it
            is heads of households, certainly not the{space}
            <a href="https://vaults.biz/party">30 hr</a>
            {space}
            <a href="https://www.ssa.gov/oact/progdata/taxRates.html">
              self employed
            </a>
            .
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/o3fto2aib3uyxxl/Screen%20Shot%202022-04-01%20at%201.54.26%20PM.png?raw=1"
              }
              float={"left"}
              title="GBNews Ben Habib decentralization not devolution"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Decentralization by local counsels and anarchy, devolution Nicholas
            sturgeon , smaller units of operative authority
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/knykjfya119k9xu/Screen%20Shot%202022-04-01%20at%201.41.26%20PM.png?raw=1"
              }
              float={"right"}
              title="GBNews abandoned laborequity.org accounting broad - hysterical torts and bizarre measure of productivity, expense/hour"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            You are gonna fucking die bitch, of starvation, for that is what you
            do to me, when you triple checking after expenses but not for me
            <br />
            <br />
            If{space}
            <a href="https://www.census.gov/library/stories/2022/01/national-poverty-in-america-awareness-month-measuring-poverty.html">
              poverty
            </a>
            {space}is to be lowered, how better than to start counting income
            over third despondence/ 33rd percentile of expenses, rather than
            thrice average expenses in Minimum Household Food Cost for 2-chorer
            household (1963)
            <br />
            <br />
            Put him out of his misery like{space}
            <a
              href="https://markethistory.quora.com"
              style={{
                color: "gold"
              }}
            >
              prevent substitution
            </a>
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/exmgw8jqo2s9v2d/Screen%20Shot%202022-04-01%20at%2012.25.55%20PM.png?raw=1"
              }
              float={"left"}
              title="Mahyar Tousi GBNews - living libertarian"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Libertarian thinks guarantee safety net should be for
            delinquent-elderly and pensioners, instead of living-hour labor and
            disabled? "we had no protection from mortgage rates in the early
            80's" well you all are idiots, every EULA has a no surrender
            anothers' freedom clause.
            <br />
            <br />
            You don’t know these things - I am consenstech
            <br />
            Moore (<a href="https://qr.ae/pvKhqc">permit 12 wastewater</a>) and
            Powell (max-royalty)
            <br />
            1/hour-GDP/p horseshoe and understand markets in all areas
            <br />
            Pay peanuts you get monkeys{space}
            <a href="https://qr.ae/pvKhlQ">((GDP-PCE) /GDP)</a>
            <br />
            Career Donald trump business people and remainers free rider mutable
            gravity toilet, naming and open source, hand for hand diplomacy
            <br />
            Trade is revenue hours or inventory sales. Supply is utility
            indifference substitutive labor-demand.
            <br />
            They get free housing as contracted in advance price lock name your
            price expiring false bid pool, albeit surrendered negotiations of
            labor, but for the worker co-op and corporate, then again to lodge
            -science/skew.
            <br />
            But what for inventory and living-hour indifference substitution.
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/5qbcegpp2d7y2cm/Screen%20Shot%202022-04-01%20at%2011.17.48%20AM.png?raw=1"
              }
              float={"right"}
              title="Blaine Holt licensing and export reason _ (?)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Licensing and USD-only-for-export/foreign-customs-import
            restrictions for very good reasons. Stop government from funding
            their own licenses.
            <br />
            <br />
            amortization is concurrentable not{space}
            <span style={{ color: "purple" }}>larceny in contract</span>
            <br />
            Welfare (debit-vault) or{space}
            <a href="https://www.quora.com/How-did-South-Korea-become-100-times-wealthier-than-most-African-countries-in-less-than-70-years/answer/Daniel-Na-22">
              expense
            </a>
            . weening bond loss profit off cops and property off scripts
            <br />
            2.5m population{space}
            <a href="https://qr.ae/pGEZyS">growth half life ago</a>.
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/72luiqbsmkk4n5n/Screen%20Shot%202022-04-01%20at%2010.10.26%20AM.png?raw=1"
              }
              float={"left"}
              title="Macroeconomics Household heads and corporates, 1/3 share with debentures (corp, tsy) and mortgage"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            USAID vs substitutive labor-demand Jobs or{space}
            <a href="https://github.com/NickCarducci/mastercard-backbank/blob/main/src/require.js">
              2.3.6.carducci
            </a>
            ? Survey of households,{space}
            <a href="https://vaults.biz/party">individuals</a>
            {space}don’t{space}
            <a href="https://fred.stlouisfed.org/graph/?g=NIXB">matter</a>
            <br />
            <br />
            estimates are not property - they are waiting in line for spot up to
            changing sprint requirements
            <br />
            <br />
            ​the federal government just tripled checking for mortgage $4t, did
            you get any? "yes" Did your cash balance triple after expenses?
            <br />
            <br />
            ​Tax still black market - and people withhold large items like homes
            if not 3% under $2k. China cheap garbage{space}
            <a href="https://saverparty.xyz/global">physical stronger</a>
            {space}Import with USD, forced!
            {/**send it - coupon, thanks joe and joe */}
            <br />
            <br />
            pedo nor stray castration! nuder puppy mill owners!
            {/**general spank or certificate */}
            <br />
            due diligence, contractor liable (EULA surrendered freedom, donee
            beneficiary labor-demand)
            <br />
            name-your-price hysteria{space}&bull;{space}Bond loss profit instead
            of rollover insurance, bred messy hair ssa discrimination I am of
            the 7% injured, not 35.4% crazy, all-cause (?)
            {/**disenfranchised people */}
            <br />
            <br />
            No way energy investment is not the way to reduce dependence in
            energy and gas in Iran, Venezuela, Russia. Leases and wastewater are
            the solution for the American people.
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/1vvshocci6zgwa5/Screen%20Shot%202022-03-31%20at%206.05.22%20PM.png?raw=1"
              }
              float={"right"}
              title="Macroeconomics Household heads and corporates, 1/3 share with debentures (corp, tsy) and mortgage"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Is this in reference to $1t corporate and $3t household? Everyone
            {space}
            <a href="https://qr.ae/pvKpsN">move back home</a>,{space}
            <a href="https://qr.ae/pvyLDk">chore</a>.
            <br />
            <br />
            "they deserve medication and{space}
            <a href="https://www.yumpu.com/en/document/read/18596138/slave-narratives-library-of-congress/41">
              shelter
            </a>
            ." Most kill shelters host puppy mill overproduction, not stray.
            <br />
            Can someone be held for at least 30 days, linkage between mental
            illness and drug addiction, none of those are relevant to the crime
            of tresspass, you just have no where to put them because of
            implausible use leases.
            <br />
            There is no Science without{space}
            <a href="https://brainscan.info">
              CT scan{space}
              <span role="img" aria-label="brain">
                🧠
              </span>
            </a>
            . Don't need to medicate to house homeless, that are such a way
            because of finance and laborless-demand.
            <br />
            <hr ref={this.immi} />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/3rn9gqyhhulocwt/Screen%20Shot%202022-03-31%20at%203.13.22%20PM.png?raw=1"
              }
              float={"left"}
              title="Jaeson Jones Newsmax American Agenda - https://www.cbp.gov/newsroom/media-resources/stats"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            They are trying to reach friends and family, they know where they
            are going.
            <br />
            Women and families, credible claims of asylum,{space}
            <a href="https://www.cbp.gov/newsroom/media-resources/stats">
              versus
            </a>
            {space}singletons
            <br />
            <br />"
            <a href="https://www.linkedin.com/posts/javascript-developer_ugcPost-6913022657198223360-z7pS?utm_source=linkedin_share&utm_medium=member_desktop_web">
              Layoffs in tech
            </a>
            {space}self-inflicted pain in China?" - CNN, that actually saves
            money
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/zksaaknjdj3vwep/Screen%20Shot%202022-03-31%20at%208.11.35%20AM.png?raw=1"
              }
              float={"right"}
              title="GBNews Steve Brine MP NHS fines state victimization bond loss profit per diem incarceration unilateral known hazard hysterical standardized guarantee 'name-your-price' tort"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            Make the companies pay to get more people off cigs, the state cannot
            self-victimize; neither discriminate “pollution” by individual
            health, you already have smoking area motions.
            <br />
            <br />
            {/*researchtyping Get me out of here. beam me up, scottie<br/>"russian incrazeian"*/}
            Aphasia is dementia all cause{space}
            <a href="https://qr.ae/pvKRxY">(?)</a>
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/p56kfqmurfqzqgd/Screen%20Shot%202022-03-31%20at%205.25.40%20AM.png?raw=1"
              }
              float={"left"}
              title="Ukraine GBNews youtuber Russian populous mad anti-social militaristic"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            The Russians are sick, Militaristic, and mad, we kill their
            prisoners of war, america castrates pedo and medicate homeless, bond
            loss profit.
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/32lmxaena03nncy/Screen%20Shot%202022-03-31%20at%205.19.06%20AM.png?raw=1"
              }
              float={"right"}
              title="GBNews Joe Ventre Taxpayers' Alliance on name-your-price pooling, and 'radical thinking'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            "$8.5b/yr savings by next year automations."
            <br />
            You could save $10t by stopping standardized guarantee schemes and
            $19t by stopping invoices, $8t housing
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/lg0hfo0x7dhfmtj/battle-of-lexington.jpeg?raw=1"
              }
              float={"right"}
              title="History Channel battle of lexington"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            They sponsored me and paid for it with worker coop/
            <span style={{ color: "purple" }}>
              corporation double tax to go public
            </span>
            /standardized guarantee loss for copy over{space}
            <span style={{ color: "cornflowerblue" }}>
              max-royalty in each industry, so royalty% subservient to customers
            </span>
            {space}as opposed to debentures or power of legal-cohorts - time is
            how it is made, and it is not how it can be kempt.{space}
            <span style={{ color: "red" }}>
              Saver-lesser mediation is nothing but (cash/debt)*income, and
              max-royalty thereafter, for vertical-industry-line skimping, or
              Consumer Fraud, -tortious
            </span>
            <br />
            <br />
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.youtube.com/embed/OqgUxnqc3AM?start=52"
              }
              float={"right"}
              title={`Frank Morano-Fact Check Peter Navarro, Employment, Immigration, (GdP, 52") & Wuhan-Serendipitous-Semination`}
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            i do everything you fucking{space}
            <a href="https://vaults.biz/party">faggot</a>
            {space}&bull;{space}First I look at
            {space}
            <a href="https://humanharvest.info/polio">statistics</a>
            {space}and (geometry) calculus-
            <a href="https://micro-theory.com">micro</a>
            {space}and East Asia, then{space}
            <a href="https://youtube.com/nickcarduccinj">politics</a>
            {space}and public{space}
            <a href="https://froth.app">finance</a>,{space}
            <a href="https://vaults.biz/gdp">history</a>, law and{space}
            <a href="https://saverparty.xyz/global">Islam</a>, then{space}
            <a href="https://qr.ae/pvKR2C">macro</a>
            {space}and{space}
            <a href="https://github.com/nickcarducci">code</a>. "GDP is bad,
            principal + interest can't be made from principal trade of inventory
            and revenue/hours" Financial Markets and Inst Macro (D, D, D){space}
            <a href="https://qr.ae/pvKRk1">
              you're lucky I didn't kill Mr. Ball
            </a>
            . Dumping cheap product is against our{space}
            <a href="https://qr.ae/pvKTxe">national interest</a>, for their
            labor is cheaper. Substitute demand of another market proves
            crowding out and subsidies{space}
            <a href="https://qr.ae/pvKppO">unlocking economic-welfare</a>,
            1/hour-GDP/p WRONG
            <br />
            Why would I incentivise index fund (
            <span style={{ textDecoration: "line-through" }}>
              fungible for nothing
            </span>
            , sell and pay ~ default/debenture loose inventory stocks and
            corp/tsy bonds - not a direct loan lessing nor{space}
            <span style={{ color: "red" }}>
              then without compound third party donee beneficiary surrendered
              freedom to bid by labor-borne for 1/hour-GDP/p
            </span>
            {space}) and have investors increase profits and lose standing with
            too broad science (exclusive answer)
            <Cable
              style={{
                transition: ".3s ease-in",
                width: this.state.openSynth ? "" : "0px"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/6lf0azokstjuehf/Screen%20Shot%202022-03-31%20at%203.07.22%20AM.png?raw=1"
              }
              float={"left"}
              title="Eamonn Isabel - (NHS) Dr. Ally Faffee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.openSynth && this.state.scrollTop}
            />
            <h4>
              Energy/5G/bridge investment instead of NFC motor vehicle and
              competition. Ritalin is amphetamines. Amphetamines are cocaine.
              everyone can concentrate with cocaine, but prescriptions prevent
              commerce. science in naming and open source.
              <Cable
                style={{
                  transition: ".3s ease-in",
                  width: this.state.openSynth ? "" : "0px"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/9lx46bm7dy7tqew/Screen%20Shot%202022-04-01%20at%201.29.20%20PM.png?raw=1"
                }
                float={"right"}
                title="Nami GBNews Dr. Grahame Buss"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.openSynth && this.state.scrollTop}
              />
              <a href="https://magnatecompany">Electric</a>
              {space}
              <a href="https://froth.app">infrastructure</a>
              will not be easily upgraded, you just want to damage longevity for
              future contracts.
            </h4>
            <AMore
              ref={{
                current: {
                  disability: this.disability,
                  depression: this.depression,
                  ssa: this.ssa,
                  supply: this.supply,
                  $: this.$
                }
              }}
              goTo={goTo}
              scrolling={this.state.scrolling}
              scrollTop={this.state.scrollTop}
              lastWidth={this.state.lastWidth}
            />
          </div>
          <br />
          <br />
          {/*<div
          onClick={() => {
            window.scroll(0, 100);
            this.setState({ trigger: true });
          }}
          style={{
            display: this.state.trigger ? "none" : "block",
            position: "absolute",
            height: document.documentElement.scrollHeight,
            width: "calc(100% - 40px)",
            backgroundColor: "rgba(20,20,20,.5)"
          }}
        />*/}
          <div style={{ overflowX: "auto", overflowY: "hidden" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "green"
              }}
            >
              <span
                id="disability"
                onClick={goTo}
                style={navitem}
                role="img"
                aria-label="wheelchair"
              >
                ♿
              </span>
              <div id="depression" onClick={goTo} style={navitem}>
                Depression
              </div>
              <div id="ssa" onClick={goTo} style={navitem}>
                SSA
              </div>
              <div id="supply" onClick={goTo} style={navitem}>
                S&D
              </div>
              <span
                onClick={() =>
                  this.setState(
                    {
                      opt:
                        this.state.opt === 1 ? true : this.state.opt ? false : 1
                    },
                    () =>
                      this.state.width < 400 &&
                      window.alert(
                        this.state.opt === 1
                          ? `“Not enough growth (https://www.bls.gov/osmr/research-papers/2017/st170010.htm), 
                        too much (https://qr.ae/pvKt09) Stimulus." Larry Kudlow`
                          : this.state.opt
                          ? ` Prosperity! -science/skew: import Brazilian (https://qr.ae/pvKyC4) Real! Fine loser
                  judges. Torttech programmatic - immediate acquittal`
                          : `"I'm going to invoke so much (https://qr.ae/pvKRD1)
                  duress on my (https://qr.ae/pvKRxY) exclusive answers." Naming and open source - 
                  acquittal bond loss profit per diem`
                      )
                  )
                }
              >
                <Cable
                  style={{
                    ...navitem,
                    backgroundColor: "green",
                    width: "8px",
                    height: "13px"
                  }}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/zqtdliklfpau6si/nj%20white.png?raw=1"
                  }
                  float={"left"}
                  title="NJ png"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </span>
              <div id="plandemic" onClick={goTo} style={navitem}>
                Plandemic
              </div>
              <a href="https://commie.dev" style={navitem}>
                commie.dev
              </a>
              <a href="https://qr.ae/pvy3yw" style={navitem}>
                Fed Res
              </a>
              <a
                href="https://occupywall.us"
                style={{ ...navitem, backgroundColor: "black", color: "white" }}
              >
                Occupy
              </a>
              <a href="https://www.facebook.com/saverparty" style={navitem}>
                f
              </a>
            </div>
            <div
              style={{
                height: "30px",
                display: "flex",
                alignItems: "center",
                padding: "4px 10px",
                fontSize: "10px"
              }}
            >
              <a href="https://truncatedwholesaletax.com" style={navitem}>
                <Cable
                  style={picstyle}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/6movjouiifpm79h/waluigi.png?raw=1"
                  }
                  float={"left"}
                  title="https://truncatedwholesaletax.quora.com"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </a>
              <span
                id="work"
                onClick={goTo}
                role="img"
                aria-label="work"
                style={{ ...navitem }}
              >
                👷🏽‍♂️
              </span>
              <a href="https://realecon.quora.com" style={navitem}>
                <Cable
                  style={picstyle}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/3tihiodmcmspwnc/realecon.png?raw=1"
                  }
                  float={"left"}
                  title="https://realecon.quora.com"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </a>

              <a href="https://markethistory.quora.com" style={navitem}>
                <Cable
                  style={picstyle}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/87fwrqaht8znlhu/markethistory%20%283%29.png?raw=1"
                  }
                  float={"left"}
                  title="https://markethistory.quora.com"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </a>
              <a href="https://electiontechnology.quora.com" style={navitem}>
                <Cable
                  style={picstyle}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/zmlgzjiign754i1/electiontechnology%20%281%29.png?raw=1"
                  }
                  float={"left"}
                  title="https://electiontechnology.quora.com"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </a>
              <a href="https://thumbprint.us/voting" style={navitem}>
                <Cable
                  style={picstyle}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/9oci4efa4zsh90q/Thumbprint_logo.png?raw=1"
                  }
                  float={"left"}
                  title="https://thumbprint.us/voting"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </a>
              <a href="https://saverparty.xyz" style={navitem}>
                <span role="img" aria-label="squirrel">
                  🐿
                </span>
              </a>
              <div
                style={{
                  position: "relative",
                  overflowX: "auto",
                  overflowY: "hidden",
                  height: "70px",
                  transition: ".3s ease-in",
                  width: "100%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    width: "max-content",
                    position: "absolute",
                    height: "56px",
                    top: "20px"
                  }}
                >
                  {this.state.width < 400 ? null : this.state.opt === 1 ? (
                    <span>
                      Not enough{space}
                      <a href="https://www.bls.gov/osmr/research-papers/2017/st170010.htm">
                        growth
                      </a>
                      , too much
                      <br />
                      <a href="https://courttechnology.quora.com/What-are-the-things-that-rich-people-dont-have-but-poor-people-do">
                        Stimulus
                      </a>
                      .” Larry Kudlow
                    </span>
                  ) : this.state.opt ? (
                    <span>
                      Prosperity! -science/skew: import
                      <br />
                      <a href="https://www.quora.com/Why-is-a-weak-currency-good-for-exports/answer/Nick-Carducci">
                        Brazilian
                      </a>
                      {space}Real! Fine loser judges. Torttech
                      <br />
                      programmatic - immediate acquittal
                    </span>
                  ) : (
                    <span>
                      "I'm going to invoke{space}
                      <a href="https://adailyimpeachment.quora.com/What-is-a-living-crisis">
                        so much
                      </a>
                      <br />
                      duress on my{space}
                      <a href="https://saverparty.quora.com/4t-checking-by-mortgage-bailouts-for-covid-single-year-age-death-rate-insignificant-n-2019-20-is-less-than-n-100-req">
                        exclusive
                      </a>
                      {space}answers." Naming and
                      <br />
                      open source{space}&bull;{space}
                      acquittal bond loss profit per diem
                    </span>
                  )}
                </div>
              </div>
              <span
                role="img"
                aria-label="bachelors"
                id="grad-cap"
                onClick={goTo}
                style={navitem}
              >
                🎓
              </span>
              <span
                role="img"
                aria-label="oil"
                id="gas"
                onClick={goTo}
                style={navitem}
              >
                🛢
              </span>
              <span
                id="pharmacy"
                onClick={goTo}
                role="img"
                aria-label="pharmacy"
                style={
                  !this.state.ios
                    ? {}
                    : {
                        cursor: "pointer",
                        backgroundColor: "red",
                        fontWeight: "bolder",
                        color: "white"
                      }
                }
              >
                ⚕️
              </span>
              <a href="https://vaults.biz/sdr" style={navitem}>
                <span role="img" aria-label="vault">
                  🏦
                </span>
              </a>
              <a href="https://facebook.com/occupynewjersey" style={navitem}>
                <Cable
                  style={picstyle}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/sjy2dil74i4ty8w/occupy%20logo_144%20%281%29.png?raw=1"
                  }
                  float={"left"}
                  title="https://facebook.com/occupynewjersey"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.openSynth && this.state.scrollTop}
                />
              </a>
            </div>
          </div>
          <div
            style={{
              color: "grey" //just do it (give me your address)
            }}
          >
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.setState({
                  openSchool: !this.state.openSchool,
                  openIndustry: false
                });
              }}
            >
              Tax for Anything
              <span
                style={{
                  transition: ".3s ease-in",
                  fontSize: !this.state.openSchool ? "12px" : "0px"
                }}
              >
                {space}
                (1/3 don't vote because "everyone likes debt")
              </span>
              <span
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.openIndustry ? "12px" : "0px"
                }}
              >
                {space}
                (reverse total to cash liabilities, then)
              </span>
            </span>
            ,{space}
            <span
              style={{
                color: "lightgrey",
                lineHeight: "12px",
                transition: ".3s ease-in",
                fontSize: this.state.openSchool ? "12px" : "0px" //covalence null confirmed! ching!
              }}
            >
              <span
                style={{
                  transition: ".3s ease-in",
                  fontSize:
                    this.state.openSchool && !this.state.openIndustry
                      ? "12px"
                      : "0px"
                }}
              >
                <i>or bar safe assets</i>
                {space}50% deficit is, school? These kids should be working
                (truly on their craft; NSF before income); yet moreover,
              </span>
              {space}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={() =>
                  this.setState({ openIndustry: !this.state.openIndustry })
                }
              >
                industry-implied payday
              </span>
              <span
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.openIndustry ? "12px" : "0px" //covalence null confirmed! ching!
                }}
              >
                ; 2503(e) tax exemptions out-of-pocket admits that student debt
                and insurance premiums cause inflation. Material Resource and
                Price substitutions are only complimented by video games, not
                shrinkflation nor time to outcome [i.e. "accelerating(ly)
                inflation(ary) layoffs"] without deflation. Real liquidity.
                Landlord skimping toward the outright market is tax exempt.
                {space}
                <a href="https://realecon.quora.com/Isnt-real-materiality-to-capital-as-real-productivity-is-to-labor-resources">
                  Property
                </a>
                {space}lock downs have a premium,{space}
                <a href="https://marginalism.uk">will have a price</a>.
                Intractable expiring commodities and scalped schedules because
                NOT loaning is non-inflationary, nor then covalent cause of
                accelerating(ly)-inflation(ary) layoffs. Probate student loan to
                industry type after reverse liability :). No more war{space}
                <a href="https://vau.money/login">bar safe asset</a>. Advanced
                payment{space}
                <a href="https://scopes.cc">proprietor</a>. literally
                revenuedata.doi.gov, student loans should industry proprietor
                payday. Dollar vote; Money is stock.
                <h3>
                  Extractable-only:{space}
                  <span
                    style={{
                      fontSize: this.state.openSchool ? "15px" : "0px",
                      transition: ".3s ease-in"
                    }}
                  >
                    Insurance scalping schedules (without a stop-loss) and
                    expiring commodities causes inflation, 2503(e) out-of-pocket
                    admits this; coverage is not simple human sense; it is
                    scientifically retarding by action of course.
                  </span>
                </h3>
                <h3>
                  Don't let borrowers off for loitering nor lenders for fixing
                  the either horizontal or foreclosure-sale kept-down payment
                  game, both causing an imbalance of supply and demand.{space}
                  <span
                    style={{
                      fontSize: this.state.openSchool ? "12px" : "0px",
                      transition: ".3s ease-in"
                    }}
                  >
                    (cash/debt)*liability payments.
                  </span>
                </h3>
              </span>
            </span>
            {/*} (I am impersonating the un barring holds war permit)
        that must not be halal to the ohio man (mormon, utah?)
        //clandestine
        */}
          </div>
          <a
            style={{
              shapeOutside: "rect()",
              float: "right",
              maxWidth: "100%",
              padding: "0px 10px",
              //fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif"
              //color: "rgb(230,230,255)"
              //backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://vaults.biz/gdp"
          >
            vaults.biz/gdp
          </a>
        </div>
      </div>
    );
  }
}
