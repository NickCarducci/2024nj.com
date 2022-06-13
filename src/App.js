import React from "react";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Cable from "./Dropwire";
import GDP from "./GDP";
import { UAParser } from "ua-parser-js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    this.podcast = React.createRef();
    this.fema = React.createRef();
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
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
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
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
      if (this.props.pathname === "/") {
        this.setState({ journal: true });
      } else if (this.props.pathname === "/fema") {
        window.scroll(0, this.fema.current.offsetTop);
      } else if (this.props.pathname.startsWith("/p/")) {
        if (this.props.pathname === "/p/the-reason-for-microeconomics") {
          window.scroll(0, this.podcast.current.offsetTop);
        } else if (this.props.pathname === "/p/intro") {
          window.scroll(0, this.podcast.current.offsetTop);
        }
      }
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    const space = " ";
    return (
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "600px",
          fontFamily: "sans-serif",
          textAlign: "center"
        }}
      >
        <div
          onClick={(e) => this.setState({ journal: !this.state.journal })}
          style={{
            transition: `${this.state.journal ? 0.5 : 0.2}s ease-in`,
            border: "1px solid",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
            display: "flex",
            position: "fixed",
            width: "calc(100% - 42px)",
            fontFamily: "sans-serif",
            justifyContent: this.state.scrollTop === 0 ? "center" : "flex-end"
          }}
        >
          {!this.state.journal ? "journal" : "plan"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            fontFamily: "'Muli', sans-serif",
            overflow: "hidden",
            backgroundColor: "white",
            height: !this.state.journal ? "0px" : "",
            position: !this.state.journal ? "fixed" : "relative",
            width: "100%",
            maxWidth: "600px",
            textAlign: "center"
          }}
        >
          <a href="https://www.quora.com/unanswered/Can-leisure-utilization-economics-be-defined-as-marginal-utility-or-economic-welfare-per-capita-by-less-hours-and-less-price-as-it-happens">
            Can leisure utilization (economics) be defined as marginal utility
            or economic welfare per capita by less hours, and less price, as it
            happens
          </a>
          ?
          <br />
          <a href="https://www.quora.com/unanswered/Is-Corpus-Linguistics-division-of-labors-efficiency-the-reason-for-all-laws">
            Is Corpus Linguistics' division of labor's efficiency the reason for
            all laws
          </a>
          ?
          <br />
          <Cable
            style={{ width: "100%", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://www.dropbox.com/s/9r7cpzr5zz0qbv5/Price%20of%20Marginal%20Product%20Wholesale%20Size.png?raw=1"
            }
            float="right"
            title="Price of Marginal Product Wholesale Size Curve"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h4>
            trust building hypocrisy -{space}
            <a href="https://crowdfundingfortaxes.quora.com">
              Crowdfunding For Taxes
            </a>
          </h4>
          <a href="https://www.quora.com/Was-actual-Marxism-never-implemented/answer/Nick-Carducci">
            Marx
          </a>
          {space}would tax to retribute (cash/debt)*income beyond{space}
          <a href="https://truncatedproductiontax.quora.com">
            free rider immutable
          </a>
          , sure. He would first and foremost end hysterical charge pools and
          invoices’ surrendered freedom to bid of third party donee
          beneficiaries, however.
          <br />
          Capitalism supports **surrendered freedom to bid of third party
          {space}
          <a href="https://digitalcommons.law.uw.edu/cgi/viewcontent.cgi?article=1260&context=wlr">
            donee
          </a>
          {space}
          beneficiaries, by
          <br />
          1. implausible use leases beyond 5 stores and condos and
          <br />
          2. invoices, warranties, and hysterical pool charges,
          <br />
          and accounts for **productivity by real{space}
          <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm)">
            expenses
          </a>
          {space}per hour.
          <br />
          <br />
          <a href="https://www.quora.com/What-is-the-difference-between-productivity-and-efficiency/answer/Nick-Carducci">
            What is the difference between productivity and efficiency?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/How-do-you-evaluate-supply-and-demand/answer/Nick-Carducci">
            How do you evaluate supply and demand?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/Did-Marx-support-Mao-and-Stalin">
            Did Marx support Mao and Stalin?
          </a>
          <br />
          <br />
          The question is, in other words, “if debt is the cause of inflation,
          why do we have it?” You said, “we cannot put on the breaks.”{space}
          <a href="https://adailyimpeachment.quora.com/A-little-bit-of-a-bad-thing-is-a-good-thing-https-www-quora-com-If-raising-rates-is-to-prevent-borrowing-to-prevent">
            Nick Carducci's post in adailyimpeachment
          </a>
          . Now you are talking about it like a tool, but there are verily
          alternatives to compounding loans or general-income debentures, like
          pipe .io.*{space}
          <a href="https://www.quora.com/unanswered/If-inflation-is-caused-by-debt-before-corrections-why-do-we-have-it">
            If inflation is caused by debt before corrections, why do we have
            it?
          </a>
          <br />
          <br />
          I’m more of a microeconomist, than a macroeconomist who would
          bizarrely attribute expenses per hour as definitionally good, on a
          zero-sum individual level and an economic welfare, 1/hour-GDP/p level.
          {space}
          <a href="https://www.quora.com/Why-is-some-inflation-good/answer/Nick-Carducci">
            Why is some inflation good?
          </a>
          <br />
          <br />
          *or my own legal creation, vertical-industry-line, max-royalty
          contracts, -tortious for revenue skimping upon withdrawal or abscond
          self-employment tax-altogether and disburse immediately upon sale, the
          needs of entrepreneurs are sufficed without **surrendered freedom to
          bid of third party{space}
          <a href="https://digitalcommons.law.uw.edu/cgi/viewcontent.cgi?article=1260&context=wlr">
            donee
          </a>
          {space}
          beneficiaries.{space}
          <a href="https://www.quora.com/unanswered/If-inflation-is-caused-by-debt-before-corrections-and-max-royalty-contracts-are-available-why-do-we-have-it">
            If inflation is caused by debt before corrections, and max-royalty
            contracts are available, why do we have it?
          </a>
          <br />
          <br />
          **Debt is a tool for laborless-demand to raise price beyond budget
          constraints, making the entire demand curve subservient to
          non-substitutive-supply instead of equilibrium ask-bid of outright
          sales.**
          <br />
          <br />
          Uses metaphors and says, “it would crush the economy.” What does that
          mean? Jobs and prices? Isn’t that inflation?
          <br />
          <div>
            Absolving student debt is how creditors KEEP their undue profits,
            reverse amortization (cash/debt)*income.
          </div>
          <br />
          <a href="https://www.quora.com/Is-debt-worth-the-inflation">
            Is debt worth the inflation?
          </a>
          {space}“Debt is worth the inflation caused by debt,” is what you’re
          saying, but I’m saying there is alternative contracts that aren’t
          technically surrendered freedom to bid of third party donee
          beneficiary, nor inflationary by laborless-demand capacity (producers
          starve and lower prices in microeconomics).
          <br />
          <br />
          Compared with: annual taxes at $2.2t/yr and $1.8t/yr debt
          spending/borrowing -3/2020, $2t checking at the time (inside and
          outside fed banks), government contractors effectively lend themselves
          money.
          <br />
          <div>
            Self-sustainability is from **substitutive-supply**, and drives us
            out of poverty, for laborless-demand doesn’t hold back**
            labor-demand**. Neil Oliver, “Government getting people out by
            buying their farmland for free rider mutable profits for the
            treasury.”
          </div>
          <br />
          substitute supply for labor demand of another market to beat crowding
          out
          <br />
          Nick Carducci -{space}
          <a href="https://occupywallst.quora.com">
            Econometrist at Occupy Wall St
          </a>
          {space}(2008–present)
          <br />
          In order to gain more popular support, the government is rebranding
          {space}
          <a href="https://qr.ae/pGLlAZ">inflation</a>. What do they call it?
          <br />
          <br />
          The former National Economic Council Director on the right calls
          employer-benefit standardized guarantee scheme (PCE, BEA), or
          out-of-pocket cheaper (CPI, BLS), inflation, prosperity, before
          <div style={{ borderLeft: "3px solid", paddingLeft: "5px" }}>
            income-expenses in a time-period gain
          </div>
          is known to supply-siders to raise bid by ask, who have more
          laborless-demand of input costs, I guess, and yet thereby generate a
          loss of economic welfare in Supply and Demand (Microeconomics), 1y/-1x
          1/hour-GDP/p, for labor is always supply, lest for dead-weight, for
          vertical industry lines, or maybe to some propensity despondency by
          total, and horizontal, living costs, between markets being the only
          time labor in one market out-profits/-saves another. There are about
          12 mutually exclusive lines of business by NAICS code, I gather.
          <br />
          <br />
          Inventory is not Supply, that includes{" "}
          <a href="https://qr.ae/pGLlsf">variable-part labor</a>
          <br />
          <br />
          <Cable
            style={{ height: "590px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsaverparty%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
            }
            float="right"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          1y/0x price by inflation, attribution of laborless-demand of
          share-split notwithstanding (global ubi currency share-split, nor
          propensity of indifference of land-deeds/vault-share or
          treasury-inventory)
          <br />
          <br />
          0y/1x 1/hour-GDP/p efficiency
          <br />
          <br />
          easy peasy. 1y/-1x laborless-demand
          <br />
          <br />
          "Should all artists boycott Spotify until they sack Joe Rogan? #MOATS"
          <br />
          I'm antivaxx and cannot respond to this poll. Only on non-compete
          grounds. Free Britney! Cornering the market with labor cost skew.
          Target margin operational monopsony non-compete. Geohash/month
          truncated production tax. The Ruble is a land deed.
          <br />
          <br />
          "How does making somebody dependent on government handouts, like basic
          income programs, improve their lives over teaching them a trade that
          will allow them to earn a living and be independent?"
          <br />
          Nick Carducci - Chairperson at Saver Party (2020–present)
          <br />
          How does making somebody dependent, earn a living, do what? Or, do you
          mean: how do you do that? You just remove the front-running,
          free-rider-mutable, laborless-demand programme. You just, don’t do it.
          <br />
        </div>
        <div
          style={{
            fontFamily: "'Muli', sans-serif",
            overflow: "hidden",
            backgroundColor: "white",
            height: this.state.journal ? "0px" : "",
            position: this.state.journal ? "fixed" : "relative",
            width: "100%",
            maxWidth: "600px",
            textAlign: "center"
          }}
        >
          <div
            style={{
              width: "100%"
            }}
          >
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://carducci.us"
            >
              carducci.us
            </a>
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://saverparty.xyz"
            >
              saverparty.xyz
            </a>
            How can you say you afford that which you launder unpaid contracts
            of third party donee beneficiaries of labor-borne-demand? let alone
            expected impossible with implausible deniability of repo-cycle kept
            down payments, you{" "}
            <a href="https://qr.ae/pGLl8V">flammable tools on the right</a>
            <br />
            <br />
            The <a href="https://2024nj.com/plandemic">global pandemic</a>{" "}
            caused checking to be{" "}
            <a href="https://commie.dev">non-fungible for currency</a>
            <br />
            Free rider mutable trade secrets!
            <br />
            gdp/p is counterproductive - price deflation per hour
            <br />
            <br />
            "'Cannot expect a man to&nbsp;
            <a href="https://Streetsblog.org">break the law</a>&nbsp;that their
            very living is dependent upon breaking it,'” state victimication
            always verboten.
            <br />
            <br />
            $12k/year/p debt $3k/year/p bond $64/year/p new
            CurrencyComponentOfM1, force majeure implausible deniability third
            party donee beneficiary
            <br />
            Non-rollover insurance is surrender of another’s freedom
            <br />
            <br />
            Fair market rate for space, is not reflected by another market
            unless you are&nbsp;
            <a href="https://www.google.com/search?q=pull+string+flying+toy">
              market making
            </a>
            &nbsp;for a new item in a depositary && location’s shipping
            <h2>yeah free for lender work deficit</h2>
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1uV9aS6C8R5z5zemvwl-1ZnU3unieTIFF/preview"
              }
              float="right"
              title="Katie Halper (Youtube) - David Dayen & Leslie Li III - 'Government is ok only for free rider immutable and emulate perfect equillibrium infinite producer price, quality and duress, is non-profit outlaid fully to non-laborless-demand. Pure inflation elsewhere'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "people don't understand Debt is money," Cash v bonds over parks,
            cash WINS. All debt "investment" will be replaced by 1-level-baoard
            max-profit-royalty-contracts. (cash/debt)*income every year back
            force majeur implausible deniability repo cycle kept down payments
            third party donee beneficiary claimables. They want to bailout
            uncolateralized and service collateralized to Yang appraise. Reverse
            the debt, poverty only includes materials lamo, forever serfs, oh,
            it's so funny.&nbsp;
            <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
              No surrender anothers' freedom
            </a>
            . We want less work! OMG. Go watch eachothers' kids. No candidate
            invoices are theft, non-voters win, default, "no."
            Poverty/equality=poorness. 40% debt spending, 50% nj, 10% debt
            service, 40% njta. Public insurance isn't better, just ban
            insurance. Used to be invoices are theft and no more scripts.
            Benefits is pure price inflation. Don't you believe in price
            elasticity. Lender landlord insurer work deficit, bbb ppp ccc all
            trust building contractors, parents, existing biz. Prevalence does
            not cause, make. I mean, it, "requires cell to reproduce," so it
            only comes out and is a byproduct then. We saw the pandemic coming
            by population size changes. Multiple sclerosis matches paralytic
            polio, I am a statistician. Dr Saveface. It only comes out, lmao.
            Put all business permits in front of an industry various multiple of
            11/12 jury, like desistation by jury truths and conviction with
            arresting officer evidence, or no jail nor bail. Truncated sales tax
            to ween jailors off net loss profit bonds to get paid by those they
            arrest. No more sales on good will last trade value, for is third
            party donee beneficiary claimable. I used malarkey in a disability
            case for assuming employers would hire me for a non-bartending job
            with this hole in my leg.
            <br />
            <br />
            Curtis Sliwa: “Wife beater, using all kinds of drugs, the worst
            person ever!” What does that have to do with eachother?
            Population/scarcity is elastic labor-elasticity, and you fucking
            call mental institutions a place for homeless people even when we
            work ten times as much as you did, for lender landlord insurer work
            deficit, all because you’re gluttonous. That is WORSE. Cap rent at
            units or days not prices, (cash/debt)*income every year back,
            truncated sales tax to week cops off net loss bonds and paid by the
            people they arrest.
            <br />
            <br />I was locked up for saying rollover insurance, then when I
            eloped from the syringe, they lied and said I kicked and punched
            them. Estimates and prevalence of weed smoker does not make motor
            nor IQ deficiency!
            <br />
            <br />
            NJ Consumer Fraud Act permits you to claim the property in
            estimates. This is insane. Pay for subcontractors in advance, like
            everyone else. Know that they can only sell their services on
            estimates of material and labor.
            <br />
            <br />
            <Cable
              style={{ height: "230px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1HYeBGkFf5mXM_ek0ukaqdVeBtFgdHGzT/preview"
              }
              float="left"
              title="Gorka Reality Check (Newsmax) - Socialism is Venezuela propoganda"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Become socialist through elections,” what is socialist about
            reappropriating labor. That is market-communist. Stop confusing
            people that it is either market-communism or&nbsp;
            <a href="https://qr.ae/pGzIGh">lender</a>&nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">landlord</a>
            &nbsp;
            <a href="https://qr.ae/pGzpwb">insurer</a>&nbsp;work deficit.
            <br />
            Real threat of socialism in america praised Psaki, "inflation is
            caused by greed. America means freedom, without government
            interference in every step in your life, want to continue power turn
            it into something I fled.
            <br />
            <br />
            Communism always leads to murder, torture labor camps. Socialism to
            all free peoples Aus, US, UK, greatest hope for a free world,
            shining city on a hill."
            <br />
            <a href="https://thechurchoftruth.org/jesus-did-not-die-for-your-sins/">
              <h2>“Our lord and savior,”</h2>
            </a>
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1dVgx70Ytl8TeHR5BVgafArtimo7xLvgM/preview"
              }
              float="right"
              title="Gorka Reality Check (Newsmax) - YTY virus guys, right and top left vaxxers"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Karl Marx's destruction, Creeping-fascism is here! …of the virus
            that, “requires cell to reproduce!” 60m WWII, 6m holocaust, 100m,
            "workers paradise, equality and socialism, 100m dead. brave states
            men and women"
            <a href="https://www.marxists.org/archive/marx/works/1837-pre/verse/verse24.htm">
              ...
              <br />
              Then came a noble knight,
              <br />
              A grand charger he rode;
              <br />
              ...
              <br />
              <br />
              Love smote deep in her breast,
              <br />
              But he galloped away,
              <br />
              For battle-triumph athirst;
              <br />
              Naught made him stay.
              <br />
              <br />
              All peace of mind is flown,
              <br />
              The Heavens have sunk.
              <br />
              <br />
              ...
              <br />
              She kneels on the floor,
              <br />
              Before the holy Christ
              <br />
              A-praying once more.
              <br />
              <br />
              But then upon that form
              <br />
              Another encroaches,
              <br />
              To take her heart by storm,
              <br />
              'Gainst her self reproaches.
              <br />
              <br />
              "To me your love is given
              <br />
              For Time unending.
              <br />
              To show your soul to Heaven
              <br />
              Is merely pretending."
              <br />
              <br />
              <b>
                ...
                <br />
                She wrings her lily-white hands,
                <br />
                The tear-drops start.
                <br />
                "Thus fire the bosom brands
                <br />
                And longing, the heart."
                <br />
                <br />
                "Thus Heaven I've forfeited,
                <br />
                I know it full well.
                <br />
                My soul, once true to God,
                <br />
                Is chosen for Hell."
              </b>
              <br />
              <br />
              He was so tall, alas,
              <br />
              Of stature divine.
              <br />
              His eyes so fathomless,
              <br />
              So noble, so fine.
              <br />
              <br />
              "He never bestowed on me
              <br />
              His glances at all;
              <br />
              Lets me pine hopelessly
              <br />
              Till the end of the Soul.
              <br />
              <br />
              "Another his arm may press,
              <br />
              May share his pleasure;
              <br />
              Unwitting, he gives me distress
              <br />
              Beyond all measure.
              <br />
              <br />
              "With my soul willingly,
              <br />
              With my hopes I'd part,
              <br />
              Would he but look towards me
              <br />
              And open his heart.
              <br />
              <br />
              "How cold must the Heavens be
              <br />
              Where he doesn't shine,
              <br />
              A land full of misery
              <br />
              And burning with pain.
              <br />
              <br />
              "But here the surging flood
              <br />
              May deliver me, cooling
              <br />
              The hot fire of heart's blood,
              <br />
              The bosom's feeling."
              <br />
              <br />
              She leaps with all her might
              <br />
              Into the spray.
              <br />
              Into the cold dark night
              <br />
              She's carried away.
              <br />
              ...
            </a>
            <br />
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1qqLJGBKH6-JbeofVyP4540zr2OVC1M1k/preview"
              }
              float="left"
              title="Chris Salcedo (Newsmax) - citations of Fox Jessica Chasmar Polis Co Dem '...their own darn fault,' and Daily Wire Dillon Burroughs, '800k covid-related-deaths'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            But the virus, of unknown taxonomy, is still caused by someone.
            <br />
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://moldmask.co"
            >
              moldmask.co
            </a>
            Statistical analysis (variance, insignificant presentation in a
            wide-range) of the time-series basis.
            <br />
            60 average age flu, 74&nbsp;<a href="https://qr.ae/pGzp1w">covid</a>
            , 75 normal, 78 life expectancy, 75+ 2015- 1.2m/yr+ expected,
            55m/yr+ worldwide;
            <br />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "15px",
                padding: "10px",
                margin: "10px"
              }}
            >
              "5m-250k, 3m peasant farmers starve to death.
              ...USSR-free-enterprise was and what Putin wants to be." If that
              is what happened in excess, population growth calls for 1m/yr, and
              3m is 150% that estimate of excess, year to year BASIS. Just as
              expected, first with 1.2m/yr+ covid in U.S., 505m/yr+ in
              worldwide, and 15m/5yr+ in Great Leap Forward., and&nbsp;
              <a href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis">
                2.5m
              </a>
              /2/38 accute flaccid paralysis in&nbsp;
              <a href="https://www.chop.edu/news/feature-article-flashback-parenting-and-summer-1950s#%3A~%3Atext%3DFor%20parents%20of%20children">
                paralytic polio
              </a>
              <h2>- saver party</h2>
            </div>
            <br />
            “They are getting covid, doesn’t necessarily mean you’ll be getting
            sick. What is he supposed to clock my in the head?" No, you are
            supposed to clock YOURSELF in the head.
            <br />
            <br />
            ms matches paralytic polio you didn't so anything. sewage positively
            correlates with lifetime mortality. try to put it in front of an
            industry variant multiple of 11/12 jury, RETARD. I'll force duress
            upon my copyright based on my abscure medical whims.
            <br />
            <br />
            "If someone comes into your house with bad intention," you can’t
            "defend yourself" blindly, only from benefit of doubt.
            <br />
            Then as he always does obfuscates by narrowing his claim from the
            actual definition of what he said earlier. “Try to hurt me, I can
            kill you. Evil intentions, violent, penalties subject in reverse. My
            store, is not the state, do not conflate, tort without expiring
            claim non-rollover-insurance. License registration and&nbsp;
            <a href="https://qr.ae/pGzpwb">insurance on guns</a>, if everyone
            should have a gun, NRA pays for the expiring claims. If you don’t
            qualify for a gun, you misused a gun.” Kill yourself Chris Hahn.
            <br />
            "Guns like cars, license them teach them how to use them, insure
            them. Idiots shouldn't have guns. Former felon." those are not the
            same retard. Insurance is a&nbsp;
            <a href="https://www.youtube.com/watch?v=aJEszZK54dw">net loss</a>.
            <br />
            <br />
            Fiat = commodities (goods, material & intermediate-labor) on market
            + parks depositary
            <br />
            <br />
            Expiring claims nor estimate options to buy is help, except for
            ask-producter
            <br />
            <br />
            Not really a paytech exclusively for non-production-taxable
            charities measured by income nor actual light tech
            <br />
            <br />
            Purchasing a house in NJ Supreme Court means estimates on labor and
            materials wrapped up in a broad scope of requirements enumerated.
            <br />
            <br />
            <a
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://teapharmacy.party/drugs"
            >
              teapharmacy.party/drugs
            </a>
            “Every healthcare people need,” we don’t need insurer work deficit
            <h2>
              <span style={{ fontSize: "9px" }}>
                "
                <a href="https://secure.kentucky.gov/formservices/Finance/WKYRelief">
                  wkyrelieffund.ky.com
                </a>
                &nbsp;0% admin fees until every family has 4 walls up, families
                are made, and kids still have a Christmas at these state parks.
                December is really tough for a lot of families, we are going to
                do our best to lift THEM up." Andy Bershier
                <br />
                Pain in the short term, recovery in the long term; inflation,
                wages: but they are the same! "Certainly on bended-knee, but
                still standing.
                <br />
                "Pain and destruction, lifted out, and maybe something new. a
                simple insurance claim is NOT whole-making. Greif, _, & trauma.
                Thanks for unprecedented [price-elastic]resources. How do you
                obliterate a full-town?"
              </span>
              <br />
              “Just give them a hand, they will rebuild,” Bob Sellers
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://drive.google.com/file/d/1ksai39JBNcFVxD2xEWVCnI_UuUGoN9YX/preview"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <span style={{ fontSize: "9px" }}>
                "who are we going to ask about this? A doctor"
              </span>
            </h2>
            Doctors follow more than any industry, plants have one beat one
            mission, yet multiple of 11/12 industry-variant jury is relevant for
            science, but not a false imprisonment-defensive against stat-
            victimization or torts beyond a tranquil and voluntary-bid, settled
            without expiry, estimate nor force-majeure implausible-deniability
            <br />
            <br />
            $12k/year/p debt, $3k/year/p bond m2, $64/year/p checking
            currencyComponentOfM1
            <br />
            $32/day/p debt, $8/day/p bonds, $.18/day/p checking
            CurrencyComponentOfM1;
            <br />
            $6k/yr/p and $6k/p total;
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1PlLFO5ReePUfXWuM3rvTYQvLP_TAB0uL/preview"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Makes 5% homes, 7.5% bonds decisions;
            <br />
            "Set government wages, food, gas - bankrupt energy companies,"
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://humanharvest.info/polio"
            >
              humanharvest.info/polio
            </a>
            <br />
            <br />
            <h2>
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                "Rand Paul was the 'first person' to ask Gov for money Kentucky
                tornado damage."
                <br />
                <a
                  style={{
                    shapeOutside: "rect()",
                    float: "right",
                    width: "max-content",
                    padding: "0px 10px",
                    fontSize: "20px",
                    fontFamily: "'Pacifico', sans-serif",
                    color: "rgb(230,230,255)",
                    backgroundColor: "rgb(32, 22, 11)"
                  }}
                  href="https://froth.app/debt"
                >
                  froth.app/debt
                </a>
                <br />
                "Ted cruz in TX, too after Hurricane Sandy."
              </span>
              <br />
              “Dems last to say, ‘Oh let’s not give money to Kentucky,’” Sliwa
              replies, “well they want to use the federal reserve.”
              <br />
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                “We need to come together whenever there is a national common
                defense,” Chris Hahn and Curtis Sliwa says in unison.
                <br />
                “Businesses have been taken out,” ppp trust building existing
                business, not most people. labor shortage caused first by boomer
                cohort size and second by racist immigration
              </span>
              <br />
              “Rural don’t have the tax base that urban and suburban communities
              have, happy governor would pay for the, gulp, cleanup,”
              electricity back, water utility all over U.S. coming in working
              through the cold Red Cross supply organizations are coming in from
              outside the community, we ran out of food and people can’t drive
              to us, so taxation from outside our market is retarded. Let's make
              sure partisan stays out of it, for the sake of Kentucky's useless
              lender landlord insurer work deficit. We will keep the people of
              the state of Kentucky in our heads, and our hearts."
              <br />
              "Thank you congressman."
              <br />
              "And I..."
              <br />
              Nick Carducci lowers the volume, while the other guy lowers the
              temp.
              <br />
              <Cable
                style={{
                  height: "300px"
                }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://drive.google.com/file/d/1petIgP37pvwbjApeqPmO-8QJxDqZzhDB/preview"
                }
                float="right"
                title="Chris Salcedo (Newsmax) - immigration death-rate"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              “Trump had the strongest border, they are importing hundreds of
              thousands of immigrants above 12k/yr ‘legally.’”
              <br />
              “Inviting death and destruction, not a victimless-crime’ and
              lawlessness.”
              <br />
              “Viruses mutate or they Peter out. Every one of the deaths from
              crossing was preventable by border security, not vaccination.”
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://drive.google.com/file/d/1XQpvhJvh2xpajuaBaiDZs1bUwkxsdlMn/preview"
                }
                float="left"
                title="John Bachmann (Newsmax) - Brandon Judd National Border Patrol Council, 'Desantis fights to protect FL from Biden's border crisis'"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                “We don’t need manpower nor technology, we need policy to
                control the border, secure, and go after criminal business.
                Without proper policy, this is going to continue. We know what
                needs to be done to solve the problem and we know what to do to
                do that, close border policies.” I don’t see any crime in
                immigration.
                <br />
                “Childrens’ Public Hospital: 'We never turn down kids for
                treatment,'” 'former public agency'&nbsp;
                <a href="https://goya.com/cares">Goya Cares</a>&nbsp;with Cousin
                Brucie.
                <br />
                <Cable
                  onError={handleScollImgError}
                  //img={true}
                  src={
                    this.state.serviceCancelingImages
                      ? ""
                      : "https://drive.google.com/file/d/1hyuB2ahWFG6TnAV6ZKVQg2Lt85AuKKBR/preview"
                  }
                  float="right"
                  title="National Report (Newsmax) - Kenosha guy in Mayfield, KY on tornado, literally"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                Doctors follow more than any industry, plants have one beat one
                mission, yet multiple of 11/12 industry-variant jury is relevant
                for science, but not a false imprisonment-defensive against
                stat- victimization or torts beyond a tranquil and
                voluntary-bid, settled without expiry, estimate nor
                force-majeure implausible-deniability.
              </span>
              <br />
              Curtis Sliwa: “Oxy is the best pain-killer. Have to take it as
              prescribed. Or just act like you are in pain and fool the doctor”
              <br />
              Chris Hahn: “They want a better high and a better life.”
              <br />
              <br />
              showing different principal&nbsp;&bull;&nbsp;1-level-board
              max-profit-royalty, cash:debt*income thru history then multiple of
              11/12 industry-various-jury designation of sewage police lawsuits
              free rider immutable collective bargain without flaccidity of
              escrow immediacy or sprint-basing to settlements wothout any
              pro-rates for same material & labor, otherwise.
              <br />
              <Cable
                style={{ height: "440px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.youtube.com/embed/RRHVYEvvm_o"
                }
                float="right"
                title="The Left vs The Right (77WABC) - Chris Hahn and Curtis Sliwa"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              $12k/year/p debt, $3k/year/p bond m2, $64/year/p checking
              currencyComponentOfM1
              <br />
              Third party donee beneficiaries:
              <br />
              NJ consumer law - estimated labor & materials community bid
              <br />
              Insurance/WarrantyByBond - expiring claim signatories’ bid-source
              <br />
              Charity - community bid
              <br />
              Volunteer - volunteers
              <br />
              Company - consumers
              <br />
              <br />
              “Non-profit” - 501c3
              <br />
              Non-profit - lightte.ch - not exclusively margin target, but no
              outlays withheld, expiring nor
              estimated-depositary-materials-nor-labor, rentable-income without
              plausible use as vacation home or 30 days, or multi-level-board.
              <br />
              <hr ref={this.fema} />
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                “Make sure they get registered with FEMA for assistance,”
                <br />
                “What does FEMA do to help,”asks one CNN-anchor to another
                CNN-journalist.
                <br />
                “FEMA goes door to door, to clear out what is left of these
                homes. You talk about these volunteers, from the local
                community."
                <br />
                You don’t need monetary contributions if it is virtuous, free
                rider mutable monies front running products like food and water
                with their money or even tax is pure inflation,
                price-inelasticity of bid-to-ask by finance
                <hr />
                (lender/landlord/insurer work deficit from invoices, expiring or
                estimated with labor and material claims, implausible landlord
                use or kept down payments upon repo.
              </span>
            </h2>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1G8E9EosD1FjGYuxxHUMp_TW94P4mJZev/preview"
              }
              float="right"
              title="Gorka Reality Check (Newsmax) - 'Time to get geopolitical.'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Medicine has been politicized,” how about financialized?
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/ZmUozfOPquk"
              }
              float="left"
              title="The Left vs The Right (77WABC) - Chris Hahn and Curtis Sliwa"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Vaccine mandate whoever comes into the country, just shoot them in
            the arm, and here is a location where it seems a lot of people don’t
            want to do these minimum wage jobs, why not? Supply-chain problem by
            a shortage of workers!”
            <h3 style={{ fontSize: "24px" }}>
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                Against $32/day/p debt principal $8/day/p bonds, $.18/day/p
                checking currencyComponentOfM1? Why would anyone do that
                voluntarily?
              </span>
              <br />
              Retard, tread on your own copy without long-term contracts except
              sports.
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                “Order to compel, contempt, try abstentia takes property,” as
                state victimization not a tort? Only if there is damages, not
                just breaking state victimization law
              </span>
            </h3>
            "Whatever needs to get done to make tornado places whole." You are
            going to price that into investing there now, the expiring claims
            false bid pools. YOU NEED TO CUT THE UMBILLICAL CORD
            <br />
            <br />
            “The only president to pay down the debt while in office.” So stupid
            to do that when velocity of m2 minus gdp divided by m2 minus
            currencyComponentOfM1. “Chris, what about the average wage of the
            worker,” “Trump left office at 11% unemployment, now it is 4%.” 2.8m
            continuing claims half 65+, 20x/millennial rental-income, most
            disability.
            <br />
            <br />
            <a href="https://nationalsecuritycasino.com">tread on copy</a>
            &nbsp;- greenhouse&nbsp;<a href="https://magnate.company">gases</a>,
            WWII and Marxist anti-rentier, repo-cycle, and profit by estimates
            of labor and material, rather than depository so labor is
            exclusively demand.
            <br />
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1kA9n4UgRQYW6xWL1yHVkOVjtJdMrWKEt/preview"
              }
              float="right"
              title={`Roger. Biden is a national security risk of not sending in troops so
            Putin stays back. and covid`}
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            can't even say worse off when describing poverty alleviation in lieu
            of
            <h2 style={{ fontSize: "20px" }}>
              lower wealth inequality; meaning, not measured by inflation,
              income nor gini alone,
            </h2>
            homes nor bonds court-backed, like such is, lest third party
            beneficiary donee trial lawyer malfeasant class resolution grows a
            heart.
            <br />
            <Cable
              style={{ width: "100px", height: "80px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1VOAbX10hoM4vksG6QYqMFKn4FFjojVmf/preview"
              }
              float="left"
              title="grinch grows a heart"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Bank depositables - not rent seekable expiry nor&nbsp;
            <a href="https://scopes.cc">estimated</a>&nbsp;labor & material
            claims
            <br />
            To boot, tech adv comparative advantage loss by enslaving or tariffs
            for USPTO racket is retarded,&nbsp;
            <a href="https://www.wsj.com/articles/trump-eyes-a-new-real-estate-purchase-greenland-11565904223">
              trumpers
            </a>
            . share split park&nbsp;
            <a href="https://truncatedsalestax.com">deeds</a>
            <br />
            <br />
            <h2>
              tort reform expiring claimable, open source licensure save
              the&nbsp;
              <a href="https://teapharmacy.party">animals</a>
            </h2>
            design and discovery equity is all you get, utility too broad
            <br />
            <br />
            assumes in perfect equilibrium.
            <br />
            competing with consumers.
            <br />
            Subsidizes free rider mutable monopsony.
            <br />
            Options to buy sold on intermediate labor and material estimates.
            <br />
            “They want to make money, they don’t want to make war,” Chris Hahn
            on Taiwan.
            <br />
            It’s just business.
            <br />
            Supply and demand is the exchange of propensities to which demand is
            labor outlaid immediately without estimates of labor and material
            appreciated as a stand up option to buy.
            <br />
            Simple majority by plural minorities is not consent, nor is unpaid
            user discrimination free market before jury-desistation of various
            industry multiple of 11/12 or non-production, tax.
            <br />
            Beyond precedence is sometimes the law, and the law is not always
            legal nor prevailing.
            <br />
            Intent to third party beneficiary donee claimable tranching certain
            compounds still laundered is manipulating prices for one consumer
            versus the other.
            <br />
            repo-cycle kept-down-payments, expiring claims, invoices,
            implausible landlord use: third party beneficiary donee claimable
            <br />
            <br />
            <h2>US Census and I projected this mortality</h2>I want to tell
            libertarians that you can’t be pro article 4, pro vaxx and
            antimandate. If it “requires cell to reproduce,” what is the
            taxonomy of the virion? I am Protistologists, like an evolutionary
            theory as sum of the parts, the only way unless a trait is an error…
            like virus? What is the point? Just like the right and top left to
            compete with consumers in finance landlord/lender/insurer (invoice,
            expiring claim on estimates of materials and labor, implausible
            landlord use, repo cycle kept down payments loitered collateral and
            laundered.
            <h2 style={{ fontSize: "24px" }}>
              transmission is an assumption of prevalance as cause instead of
              byproduct
            </h2>
            <br />
            Before trade by depositary, public-parks are generically overvalued
            to labor equity.org propensity to appreciate beyond obvious utility
            by produce or improvement, not rental-intent deduced.
            <br />
            <br />
            Loans are third party beneficiary donee claimable. We (bottom-left
            politics) will amortize reversal of repo-cycle kept-down-payments by
            cash:debt*income thru history and move exclusively to alternative
            finance! Max profit royalty and recurring revenue. But since outlays
            schedules aren’t concurrentable, maintain per withdrawal or sale by
            the account-holders, of a business, not a investing-corporation in
            another alternative finance
            level/derivative/fract.reserve/counterfeit-compound, anything other
            than equity.
            <br />
            <br />
            Net loss exports? depends on if Investment is (+)
            <br />
            IP-isolated comparative advantage projects over corporate profits,
            prices and hours is the very opposite of productivity, retards (you
            know, tech advancement).&nbsp;
            <h2 style={{ fontSize: "24px" }}>
              New/net exports of durable goods, being perfectly in public parks,
              and such as a depositary of maintainence-less public parks
            </h2>
            , makes all service and material exporting over dollars a gain,
            except for copy- or non-consumer-surrogate-utility-discovery
            business-rights counted as "investment," but when corporate outlays
            first,
            <h2 style={{ fontSize: "24px" }}>
              in my book, is "gentrification"
            </h2>
            {/* market history and propoganda: The Great Leap Forward expected 15m
        35 age&nbsp;<a href="https://froth.app/stats">lifetime</a>
       &nbsp;deaths*/}
          </div>
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1uhex0QL6SJbdXIsOjlNjbum3VKkUltWP/preview"
            }
            float="right"
            title="John Bachmann Now (Newsmax) - Rumble serverless node.js anti-quality-cudgel going public with Cantor Fitzgerald front-run public-fee, double income/outlay tax"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “The money is going to be continue to be printed,” and&nbsp;
          <a href="https://thumbprint.us/payments">
            node.js competition with consumers
          </a>
          &nbsp;busy-work without consumers ready willing and able or free rider
          immutable sewage police lawsuits and others by jury(Cause for removal
          never for view of law but industry-variance)-permittable as would
          desistation before paying lest not discriminating users, duress beyond
          mvp in minimal viable product or conviction (any multiple of 11/12).
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1Wy9wkm57Do3GGHmJUPk2nKgRH577lIKI/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Fred Keller on unfettered business discretion of duress in trade (minimal viable) product"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “We need to trust that businesses can, ‘do the right things,’ to keep
          businesses safe at their jobs,”
          <br />
          <br />
          Should be illegal to compile labor to sign for longer than a month a
          la carte except for sport drafts…
          <br />
          “Money may not be the key to happiness, but it is evidently key to
          mental health,” Dick Morris talking about Gallup poll finding
          self-described non-excellence in mental health from left to right
          <br />
          <br />
          Force majeure is the right to abortion, finance (invoices & expiring
          premiums of duress by the former,&nbsp;
          <a href="https://30under5.us">implausible landlord use</a>) makes
          living without income impossible
          <br />
          <br />
          Doubling employment to population ratio by watching eachothers’ kids,
          notwithstanding
          <br />
          <br />
          Liberty doesn’t allow for liberty to fail, but force majeure does
          <br />
          <br />
          Janet Yellen: "Childcare and eldercare increases hours worked,"
          because you are watching another person's kid
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1o8ocuvUejP59ZUOo322DbqV-zDw6fm_W/preview"
            }
            float="right"
            title="National Report (Newsmax) - GOP elder on inflation by lender/landlord work deficit only"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Jerome Powell: "Brisk pace of wage inflation," is inflation, as is
          home and bond prices, but gini nor Powell counts it as as intermediate
          labor
          <br />
          <br />
          “Let the private sector grow the economy, not government.” While
          supporting broadband and bridge toll rent-seeking instead of
          target-margin and jury-permitting upon microeconomic perfect
          equilibrium (infinite producers) emulated & private accrual (invoices)
          & false bid pools (expiring claims non-concurrentable nor rollover
          insurance)
          <br />
          <br />
          friends and family discount should be illegal like&nbsp;
          <a href="https://humanharvest.info">hung</a>-jury-business-permits
          <h1 style={{ fontSize: "24px" }}>
            $3k/year/person, $8/day/person -3/2020
          </h1>
          80k/yr 216/day missing children,&nbsp;
          <a href="https://login.gov">forever</a>
          {/**https://nationalsecuritycasino.com */}
          <br />
          <br />
          To boycott credit, or even provide the option in what is assumed to be
          infinite for pareto efficiency equillibrium of labor-based-demand, and
          tag transactioned for accounting software and congress for
          jury-based-free-rider-immutable and
          jury-conviction/-business-permit-duress-beyond-mvp designation, by
          $75/mo to mastercard api and&nbsp;
          <a href="https://github.com/NickCarducci/mastercard-backbank/blob/main/src/index.mjs">
            $30/mo
          </a>
          &nbsp;serverless node.js (making AST ={">"} esm for webworker $5/mo)
          <br />
          <br />
          presenting options to buy sold on down payments and estimates on&nbsp;
          <a href="https://scopes.cc">intermediate materials and labor</a>,
          durable goods being public parks
          <br />
          <br />
          Rent-seeking operating costable is susceptible to market communism vs
          free market communism or Marxist Communism
          <br />
          <br />
          “Major economic downturn,” Rudy, every number you cite is a good thing
          to go down
          <br />
          <h2>
            gdp/down 11/1 is not consumers nor purchases, rent seekers to the
            left and right, the latter if private&nbsp;
            <span role="img" aria-label="squirrel bottom-left white-circle">
              🐿↙️⚪️
            </span>
          </h2>
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1n77U9ifqOLDhXsy1styK3l6VyEjWix4f/preview"
            }
            float="right"
            title="Daily Wire - Biden and Walmart Ceo on credit as income"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Utility open source copyright, consulting isn’t an own-able trade
          until wireframe
          <br />
          <br />
          Not emergency if delayed, not bona fide if impossibly-foreseeable
          <br />
          <h2>
            <span style={{ fontSize: "24px" }}>gdp is price to hours</span>, the
            better of output productivity is the very opposite (price-deflation
            per hour), let alone an amalgamation of apples and oranges: to count
            this spends is as to count withdrawals and deposits by certificates
            on the market
          </h2>
          Who is responsible for the high tuitions we face? If Dick Morris says
          anything other than debt emitting capacity beyond settled supply and
          demand of capital, not accrual (counterfeit-contracts, compounding
          before consumer or as medium, collective bargain fallacy outlays max
          profit royalty false bid pool)
          <br />
          More administration to students at Yale, just dumping content (JDC)
          <br />
          <br />
          Don’t invest in small shiz (
          <a
            href="https://saverparty.xyz"
            style={{
              backgroundColor: "rgba(200,100,150,.5)"
            }}
          >
            pre
          </a>
          )
          <br />
          fuck it, going to counterfeit this bentley
          <br />
          <br />
          You need to mandate freedom, infinite producers working out
          oligopolies and industry-precedence-interest and save-face is just an
          assumption
          <br />
          <br />
          Opposition to the following is the plural majority, in presidential
          elections, and simple, in gubernatorial
          <br />
          Human Resources and management is for Democrats/Republicans to share
          corporate profits
          <br />
          <h2 style={{ fontSize: "24px" }}>
            isolate your IP and buying power&nbsp;outlay corporate profit,
            today!&nbsp;╲⎝⧹ ( ͡° ͜ʖ ͡°) ⎠╱
            <span style={{ fontWeight: "normal" }}>
              (good for consumers by comparative advantage is business by labor,
              as opposed to gov/"commercial"-banks/credit-"unions" colective and
              non-concurrentable (in settlement or amortization), unless the
              utility of design and discovery broadness is free rider mutable)
            </span>
          </h2>
          unless concurrentable units, then is collective bargaining
          (rollover-insurance)
          <br />
          Believe me, I want you to be prejudice, for argument’s sake
          <br />
          <h2>
            <a href="https://carducci.us">Duress</a>&nbsp;
            <a href="https://login.gov">to dance</a>&nbsp;
            <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
              and alimony
            </a>
          </h2>
          if you put profits (unsettled rents, collective bargaining escrow)
          over labor, you aren't conservative. stop saying, "marx teaches about
          men having sex with boys" {/**cheryl chumley */} and just boycott
          credit as income
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1ZVrPziSu1QaGD3rfR830gIY9nc28h8hp/preview"
            }
            float="left"
            title="The Count (Newsmax) - Logan Raddick on socialism and conservativism, profits and microeconomic theory"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “How socialists are infiltrating and conservatives&nbsp;
          <a href="https://2052.live">come to the rescue</a>”
          <br />
          <br />
          The oil pipeline wouldn’t have helped unless it was a collective
          bargain by having no operating costs payable to contractors, but it
          has them. Such a free rider mutable operation (not sewage police
          lawsuits which cannot be stopped a la carte, immediately) is like
          bridge-tolls target marginable because it has operating costs and
          allowing government to free rider mutable tax 60%, 10-40% debt service
          and 40-50% debt spend. The left and right wing media wish for the
          government to rent-seek under the auspices of potentially-fortuitous
          consumer-surrogate operation
          <br />
          <br />
          “I’ll tell you my plan for a little money, do your job,” solicits free
          rider&nbsp;<a href="https://truncatedsalestax.com">immutable</a>
          &nbsp;sewage police lawsuits
          <br />
          <br />
          <h2>
            verdicts from capacity of false bid pools is very much of third
            party beneficiary standing to forbid, reverse and sit on jury (now
            tort-reform ideas are cause for removal from the balance of the
            jury)
          </h2>
          "you tax gm you're gonna pay for it when you buy a truck," phil _;
          unless we outlay profits today, traditional tax is merely money for
          same intermediate good labor and material in supply chain without
          laundered brought forward demand backfilled by saver money 40-50% (97%
          amortized) for 1/4 pensions, 1/4 premiums expiring uselessly, 1/4
          pentagon, 10-40% debt-service fed-state
          <br />
          <br />
          “Capital income penalties small biz,” sounds like gov is just getting
          in on the deal. Only sewage police lawsuits is free rider immutable,
          all else is gentrification by wall st or gov, mostly wall st is new
          debt by 60/40. pipelines/bridge-tolls can target marget private
          consumer surrogate, be it investment bank as is equity, or&nbsp;
          <a href="https://vaults.biz">
            max profit royalty by p2p as is non-concurrentable
          </a>
          &nbsp;false bid pool otherwise, on infinite producer reasoning as a
          STATED ASSUMPTION amongst finite producers and even demand not
          exclusively labor, but profiteers
          <h2>free rider mutable tax and 40% debt spending</h2>
          <br />
          <br />
          "donating" free rider mutable when you can ban invoices, implausible
          landlord use and false bid pools, is merely r&d monopsony and
          grentrification like colonization by slave by proxy-collateral kept in
          repo-cycle purposefully and not for trade without duress beyond
          jury-for-business permitting minimal viable product, or else illegal,
          at least not efficient toward microeconomic reasoning of infinite
          producers in a finite producer reality. Actually like pick up a shovel
          <br />
          <br />
          300/day, business to conduct drilling is usually bankrupt and keep
          down payments or operating and kept down payments of useless
          bid-to-ask brought forward demand for the same good, but without
          waiting for consumer in p2p, equity in investment bank, or
          consumer-surrogate target-margin in government regulation, as a
          perpetual motion machine without operational cost can never a free
          rider mutable tax nor 40-50% saver-money (amortized 97%) make
          <br />
          <br />
          Don’t fucking speak about microeconomics you bastard, fucking die
          <br />
          <br />
          "corporations provide the wages, as long as the profits are doing
          well."
          <br />
          "workfare," but I was a bartender, now injured, and you assume so much
          of employers to put up with me and my needs
          <br />
          <br />
          you're a fucking market communist larry, by corporate, collective
          bargaining a business account for what? to prohibit shareholders from
          splitting off and competing?
          <h2>
            "it's an inflationary boom in consumer spending, wages and salaries,
            and unfortunately inflation. inflation is the problem, not
            recession. Progressives love employment, but not the employers and
            profitable businesses with wages higher earned by productivity,
            plants to make the worker better[ saved up], you cant gave
            capitalism, without capital ... [blah blah blah ]long term growth.
            Short run inflation leads to great happiness, long term great
            recessions”
          </h2>
          "No evidence of price gouging," Larry Kudlow says, “to replace demand
          of more money with more supply,” what the fuck does that mean. you can
          reverse the money to checking without accrual $88t (debt, counterfeit
          laundered third party beneficiary) to $2t cash
          <br />
          Is false bid pools, implausible landlord use lender work deficit
          invoices and repo-cycle of down payments kept purposefully-impossible
          force majeure of options to buy on estimates or expiring claims and
          calling the monthly deductible a savings or business, much less
          competing with consumers intent of non-compete drafts of
          intermediate-materials-and-labor of grandiose scope everchanging until
          excrow outlaid and happiness the onus of the employer, that is price
          gouging
          <br />
          Don’t fucking speak about microeconomics you bastard fucking die
          <br />
          <br />
          <a href="https://www.latimes.com/politics/la-pol-ca-wrongful-convicted-restitution-victims-compensation-20190523-story.html">
            120000
          </a>
          &nbsp;compensated by further than capacity without state as victim nor
          incriminating until you license for no other productive reason than
          craft beer hegemony for false imprisonment but everyone in&nbsp;
          <a href="https://www.prisonpolicy.org/reports/pie2020.html">jail</a>
          &nbsp;is moot when findings pay in net loss bonds rather than
          truncated sales tax
          <h2>
            Young people are&nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">sadder</a>
            &nbsp;because we are workign twice as much as you,&nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">5 times</a>
            &nbsp;per worker, psychologist agenda saveface isn't
            biological-malformity and shouldn't be healed by anything but the
            source being exogenous in the economy
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1lckqzSZheK66Si1TASlHL-qSUB8NaNBd/preview"
            }
            float="right"
            title="Saturday Report (Newsmax) - Scott Walker and Mark Halpern on collective bargaining with escrow"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Private banking or public banking is as insignificant as private
          insurance is to public, except for the 40-50% debt-spending and free
          rider mutable tax for lender-work-deficit retardation by public, still
          false bid pools & net loss for not being concurrentable in outlays,
          compounded penalties laundered from your consumers unbeknownst to them
          starting when you forge the counterfeiters’ lien. Max profit royalty
          can literally ‘replace’ compounding as a measure of equity, “without
          dilution” or share-split
          <br />
          <br />
          $88t debt $2t cash, Kilmeade clicked me, is bad,” “you cannot have,”
          bo Snerdley, by what grounds other than the law, or natural and
          comparative law, as to at least prevent nuclear dilemma but at best
          comparative advantage lubed. “Are we killing the durable symbiotic
          earth by killing?” Not evidently. ”In order to maintain life, life
          must be taken.” In trade, that is not true. Life doesn’t require the
          taking of life
          <br />
          <br />
          <h2>
            "liberalism is in fact a mental disorder, whenever you see something
            mad in society, just plug it in, and you have your answer."
          </h2>
          <br />
          "Where is the money going?" get off tv
          <br />
          you might be rich and dumb, but you're criminal and deserve to be in
          jail for advocating invoices and false bid pools impossible and net
          loss
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nofred
                ? ""
                : "https://drive.google.com/file/d/1Ztv54V2RQrgijxfdY38S7bqP0cdFwiHZ/preview"
            }
            float="left"
            title="The Count (Newsmax) - Logan Raddick and radio facc Mike Savage on young looters"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            Unfair, or cheating and impossible? useless price inelasticity to
            boot, for same intermediate-durables-material-and-labor-on-ask, half
            as many unemployed per person and 5x hours per worker since when you
            were a kid, and 65+ are half continuing claims. get back to work old
            man
            <span style={{ fontSize: "9px" }}>
              , 20x/person&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">55+</a>
              /millennial rental-unit-income, 73% 50+ pro-AARP false bid pool
            </span>
          </h2>
          “The greater the freedom[ - corporate profits withheld, - repo-cycle,
          - 60/40 free rider mutable tax/ debt spending useless
          price-inelasticity of bid-to-ask non-target-margin networks finite
          producer public utility with operating costs, and therefore,
          opportunity for profit, outlaid right away, or collective bargaining a
          checking account... where collective bargaining loses its boost, but
          non-integral partial derivative momentum, - hung-jury-permits for
          business, - competing with consumer intent deduced compelling us to
          cap rents at 5 units or 30&nbsp;<a href="https://30under5.us">days</a>
          &nbsp; to prohibit, - time-based-debt or pay-day loans, especially
          when outlays aren't concurrentable in a bank that which should remain
          in equity, - false bid pools by hours of labor beyond p2p &&
          industry-type, - closed-source-licensure, -
          landlord-/lender-work-deficit, - working-age-deficit], the greater the
          wealth”
          <br />
          <br />
          “Guns adds to violence” but it is also the only way to defend
          ourselves from incarceration net loss bond profit
          <br />
          <br />
          the far right is anti-labor, pro-corporate profit. the far left is
          government gentrification
          <br />
          <br />
          it is not better to be&nbsp;
          <a href="https://humanharvest.info">vaccinated</a>&nbsp;than not,
          cases vs asymptomatic-testing is the fallacy doctors' save-face, and
          ms matches paralytic polio, excess antibodies or fetal cell lines are
          dysregulative and gross
          <br />
          Access to medicine isn't granted by free rider mutable tax 60%,
          debt-spending, and closed-source-licensure, more demand by money or
          government r&d monopsony is only ever harmful. more demand by working
          age cohort size is efficient per hour of work
          <br />
          "Future is affordable," alt fin like max profit royalties and
          recurring revenue
          <br />
          We surely cannot pay back the debts
          <br />
          relying on&nbsp;<a href="https://billbiden.org">"key investments"</a>
          &nbsp;by more money for the same intermediate-goods-material-and-labor
          is useless price-inelasticity from bid-to-ask
          <br />
          <br />
          <h2>what about new business? child tax credit enslaves children</h2>
          "sba and disaster programs," are just prohibiting this price-change by
          expiring premiums, or non-rollover insurance, the definition of
          embezzling with the stated intent to expire, but abetting invoices
          that are impossible but instilled by prisoners' dilemma or more
          accurately, nuclear dilemma
          <Cable
            style={{ width: "100%", height: "570px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nofred
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JiC5&width=670&height=475"
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=JiC5"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          “180% more likely to prematurely die if depressed,” a.k.a. "I can't
          wait for my Haitian wife! Stop the working age from taking our
          durable-good jobs! It is a bipartisan, non-controversial issue!"
          <br />
          <br />
          "Consumers feeling good, a lot of 'employment available,' a lot of
          'savings,' Mark Zaney, rater of appraiser of bonds beyond third party
          beneficiary when compounded and laundered from your customers and
          employers unbeknownst and for useless price-inelasticity of bid-to-ask
          to boot. it is a sure thing to keep down payments upon repo-cycle or
          else share-split of park-dollar without consent & force by free rider
          mutable and useless price-inelasticity of bid-to-ask reason, instead
          of forcing labor in supply to lower our price/hours
          <br />
          <br />
          <h2>a net loss just like dancing over durable-good production</h2>
          whores laughing when gdp/down is 11/1
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1S4hVWe_uOdc9o6ej134RSLs3nzx5bHKo/preview"
            }
            float="right"
            title="Chris Salcedo show on Newsmax with Carl Higbie on Thanksgiving-friday 2021 with tech lead vaxx detractor in 30% antivaxx cohort (with enough savings to retire, it seems)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            muh sewage police lawsuits can be solved with reverse don't cancel,
            truncated sales tax, and login.gov.&nbsp;
            <span
              style={{
                fontSize: "9px"
              }}
            >
              consumer surrogate target margin (& jury for business) for public
              utility all else in automatic tolls & pipe usage
            </span>
          </h2>
          “You don’t have a ton of rights, working for the government, but,”
          <br />
          <br />
          "something smells that new cases from nothing, I don't want to be
          conspiratorial"
          <h2>
            Not all common sense detractors are idiots, sometimes pioneers
          </h2>
          <br />
          "ticketmaster and vividseats, under $50," but credit isn't a dollar.
          $4t/yr fed spend 40% credit doesn't become $2t checking
          (currencyComponentOfM1)
          <br />
          <br />
          Disability can be claimed without assumption of new work or with
          mental-diagnosis. This is fraudulent without physical evidence of at
          least a brain malformity!
          <br />
          <br />
          Hey Nantucket guy: Talking to the fed about inflation, whom don’t care
          about lender work deficit, is retarded
          <br />
          <br />
          Natural schedule tendencies (law without law) does not a reason by
          infinite producers in a finite producer reality make
          <br />
          <br />
          <h2>To outlaw laws or to be an outlaw</h2>
          As a ticket-seller, I have to make my own paytech to boycott credit
          (useless price inelasticity of bid-to-ask beyond natural-capacity)
          <br />
          <br />
          “Desantis has [golf ]balls, and he is willing to sell it to you, he is
          doing it right” - Brian Mudd
          <br />
          <h2>
            bailing out my mothers' collateralized and&nbsp;
            <a href="https://nationalsecuritycasino.com">state-victimized</a>
            &nbsp;debts
          </h2>
          <Cable
            style={{ width: "100%", height: "400px", maxHeight: "30vw" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1CtQw7G9g2Il7v-7A43gV9g-yGUCYBfNg/preview"
            }
            float="left"
            title="SSA disability and insurance findings favorable for opinions on mental-accumen rather than physical ability without pain and malformity"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ width: "100%", height: "400px", maxHeight: "30vw" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1-JP5ChdST5Gq6JO1urDm8M3UWjATP87u/preview"
            }
            float="right"
            title="'When I hear some colored folks say they wish the old slavery times back, I just knows they is lazy. They don't want any responsibility.' - https://www.yumpu.com/en/document/read/18596138/slave-narratives-library-of-congress/41"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            The messy hair disability from social security; slander to bailout
            lenders and borrowers, instead of amortizing and reverse
            debt:cash*income thru hsitory
          </h2>
          "how much is it going to cost tax payers to keep paying for these
          boosters?" Curtis Sliwa asks. Dick Morris says, "pay parents for
          taking care of children," while charging 11x capacity, the share-split
          even harms the new entrants to the economy, by allowing
          landlord-lender-and-loitering-borrower-work-deficit to permeate,
          instead of forcing settlement
          <br />
          <br />
          Curtis Sliwa: “Unfortunately, the shot was not lethal,” after a gun
          fight erupted from asking for the guy to take his hands out of his
          pockets
          <br />
          <br />
          <h2>
            I have a fucking hole in my leg, "doctors" racketeering with
            "opinions" and malintent
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/f0jgbxbd61U"
            }
            float="right"
            title="Household duress beyond jury-permit, doctor opinions begotten by indebted with collateral SEC boomer"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Consumer surrogate & margin-target, the right wants to rent seek for
          government bailout because they want to keep living in the unreality
          of infinite producers
          <br />
          Truncated sales tax can close prisons whom make money on net loss by
          bonds
          <br />
          I’m still appealing and I want to use it to another place
          <br />
          <br />
          Communist against invoices, false bid pools & hung-jury-permits
          <br />
          Paid family leave forced & ppp prohibits labor-competition, just to
          bailout landlord-work-deficit
          <br />
          <h2>
            it's your honor, your honor&nbsp;
            <a
              href="https://carducci.us"
              style={{
                fontSize: "9px"
              }}
            >
              stay in business, without business
            </a>
            !
          </h2>
          The reserve profit to the treasury is solidifying for the dollar, but
          upon invoiced and false bid pool laundering, and&nbsp;
          <a href="https://truncatedsalestax.com">
            slandering upon those who say so
          </a>
          {/**https://www.cdc.gov/flu/resource-center/freeresources/graphics/infographic-lab-work.htm */}
          <h2>
            Trust statisticians, not doctors;Cases vs asymptomatic testing and
            2k/yr&nbsp;
            <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
              discovered
            </a>
            &nbsp;
            <span style={{ fontSize: "9px" }}>
              <a
                style={{ fontSize: "9px" }}
                href="https://www.cdc.gov/flu/swineflu/keyfacts-variant.htm"
              >
                All cartoons
              </a>
              , testing 1 at a time
            </span>
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1Fllv6JQSJ6VwMOGVYA1Qgj3x28lVXnNu/preview"
            }
            float="left"
            title="John Bachmann Now - Christian Whiton with Jo Pinion on stock prices and virus"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Activities but not accomplishments” Christian Whiton paraphrasing
          Carly Fiorina, measured by accrual and false bid pools is ignorant of
          per hour price-deflation tech-advancement as output
          <br />
          <br />
          "exposed but not infected"
          <br />
          you have never actually infected with virus
          <br />
          <h2>
            <a href="https://humanharvest.info">cases</a>&nbsp;vs
            asymptomatic-testing
          </h2>
          Draining the swamp is not ppp trust-building and prohibiting
          labor-competition in paid family leave, etc.
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/18i2_w7orlcepOuvQJNWNymhfmS8aQogH/preview"
            }
            float="right"
            title="John Bachmann Now - Christian Whiton with Jo Pinion on cash we currently don't need"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Jo Pinion: "Flood with cash that we currently don't need," we never do
          need it afro-tool, nor did we to&nbsp;
          <a href="https://30under5.us">keep people in homes</a>. the only
          free-rider-mutable operations beyond 10-40% fed-state debt-service and
          compounded over work, is sewage police lawsuits. atuomatic tolls and
          oil-pipes can have private-monetary-investors (consumer-surrogates)
          target margined (& jury for business) for infinite producer reason in
          a finite producer reality
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/11kur33tU1ONrqyqb8ZwtI_oQl84lidT7/preview"
            }
            float="left"
            title="National Report -Jenna Ellis on Communism, Socialism, Democracy and the market-communist policies of tha last century"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Their own communist agenda beyond what the American people want, and
          what they mean by best is the Biden socialist, and …their own
          globalist agenda. Until republicans come home to actual conservatives,
          they will lose.” You need to realize that welfare is price-elastic and
          not social at all. Communist is the method to use the jury over the
          industry-interest 1/12 share
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1i1uA1WQOFb-9R1EXgpiaQQgjKNKfyG24/preview"
            }
            float="right"
            title="National Report -Jessse Jane Duff on continuing claims as a measure of unemployment to population"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          We will not see pre-covid employment rate until 2024, 2m continuing
          claims is half 65+! Lazy bitch
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1f2_4x3O16OCPQZQ7Gtnjtde0X83W9CTM/preview"
            }
            float="left"
            title="National Report - Bobby Eberle, Ph.D. 13 Minute News Hour on cash flow and burn"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Day to day operating costs involved in having a family doesn’t mean
          free rider mutable tax 60%, 40% share-split to bailout
          <br />
          <br />
          Is GDP mostly home "sales"? If you look at the largest expense over
          time as opposed to in gdp, since its&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=JicW">growth</a>
          &nbsp;rate is so substantial, even gdp2% (nearly with population) can
          expound (see &nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=G8nU">below</a>) over a
          lifetime (of work), greater costs towards their propensity to
          spend/work
          <Cable
            style={{ width: "100%", height: "570px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nofred
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=Jidp&width=670&height=475"
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=Jidp"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <h2>
            Where is the&nbsp;
            <a href="https://nj.gov/state/elections/election-information-ballots-cast.shtml">
              2021-official-general-voter-turnout.pdf
            </a>
            ?
          </h2>
          “Over on the democratic side of&nbsp;
          <a href="https://nj.gov/state/elections/assets/pdf/election-results/2021/2021-primary-election-voter-turnout.pdf">
            the party
          </a>
          ,” Burt Jones slips on the &nbsp;
          <a href="https://nj.gov/state/elections/assets/pdf/election-results/2020/2020-official-general-voter-turnout.pdf">
            bipartisans
          </a>
          &nbsp;vs savers/socialists who want to keep finance out of business
          and amortize instead of keep down payments upon repo-cycle
          <br />
          <h2>
            When supply is&nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=H5XB">working</a>
            &nbsp;age and demand is money
          </h2>
          “When demand&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">overwhelms</a>
          &nbsp;supply, prices rise,” implies there are suppliers that aren’t
          demand, which implies labor is not exclusively demand (if demand is
          not retired by&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">accrual</a>
          &nbsp;and expring-premiums, instead of work)
          <br />
          <h2>
            we work 10x more per home, that is 5x more per person and 2x more
            workers per person, than 1970
          </h2>
          <br />
          "It’s all going to come down to how that money builds the&nbsp;
          <a href="https://www.ezpassnj.com/">bridge</a>&nbsp;or the road;" Need
          consumer surrogate with target margins (& jury for business), not
          rent-seeking operational costs, free rider mutable 60% tax nor 40%
          debt-spending 10-
          <a href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf">
            40%
          </a>
          &nbsp;debt-service
          <br />
          <h2>
            Radical market communists, marxist communists/socialists want:
          </h2>
          <br />
          Corporate profits do not Trickle down as outlays, fixed income was
          forced in 1937 (war bond investment 1933 after years of ads) and they
          act like our debts that compels such is impossible to reverse,
          corporate profits to be outlaid and cap rent 5 units or 30 days for
          force market liquidity and encapulate labor as demand
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1mcLkl7-8JG19T8xZX51PlMSlUbemLqii/preview"
            }
            float="left"
            title="Cortes & Pellegrino - Seb Gorka on Trumps' electorate-base, & his wealth"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          This "conservative" says valuation is qualifying as cash
          <br />
          “Trump is a billionaire from Manhattan.”
          <br />
          "The bulk of his fortune remains tied up in New York City real
          estate."
          <br />
          <br />
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1E0017YZhpWFZtQA7ifaI7DoVNGK9P01R/preview"
            }
            float="right"
            title="GBNews - tomorrow's news tonight on Thanksgiving 2021 (Nick Dixon, Leon Kuberman, Dominic Frisby)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Fare-dodging is Libertarian,” to Brits because gov and corps are the
          same or actually it is… why is port not consumer-surrogate with
          target-margin (& jury for business) for infinite producer reason and
          finite producer reality
          <br />
          <br />
          Candice Owens, not even cops can shoot a burgular. A knife in the car
          is a wide-line you don't even want to be on. If cops are malfeasant,
          reason can permit some open-carry-stepping, though I would prefer you
          use luggage
          <br />
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1e8eu_FVDe-lm2ZX3iqihPiBiG4emKu5e/preview"
            }
            float="left"
            title="GBNews - Nigel Farage best of on Thanksgiving 2021"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>brilliant!</h2>
          “It’s not mental illness, it is laziness”
          <br />
          “Don’t surrender, take the opportunity, work for it.” That is a trade,
          laundering-profits-under-duress is victimization, surrendering is
          inherent in that, just as much as duress yourself can withstand the
          trade
          <br />
          <br />
          real communism is enforcing-socialism, that is pareto-efficient and
          &nbsp;
          <a href="https://constitutioncenter.org/interactive-constitution/preamble">
            tranquil
          </a>
          <h2>
            please, crawl into a deep hole; there is nothing social about it
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1OQ6xsdVvyd9kcWYTUs5TepIMHIBNNvFV/preview"
            }
            float="right"
            title="Spicer & co - Pilgrim guy"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Socialism is to give every labor the means of production (exclusively
          demand), not pay everyone not to work! (40% share-split, 60% free
          rider mutable tax, for the same goods of money from people that
          weren't necessarily auctioning...)
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1govE6gKLA3ONVhWRpu5FEiLucuPVmIUT/preview"
            }
            float="left"
            title="Spicer & co - David Kustoff 'social spending' share-split and 60% free rider mutable tax"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Tyranny by majority and minority, only jury suffice without subjective
          stigma of the 1/12 detractor(s)
          <br />
          <br />
          Stop calling it social spending. Even welfare is at best share split
          for the same goods, 60% free rider mutable tax
          <br />
          <br />
          don't trade a collective bargain for a government rent-seeken deal,
          instead of target-margin consumer-surrogate, and max profit royalty to
          p2p investment (not bank for equity-concurrentable) only
          <br />
          <br />
          "they will continue voting democrat [and republican ]for the rest of
          their lives because they are getting a check[ but do not realize it is
          share split and capping rent at 5 units/30 days, reversing debt to
          what would be priced without, banning invoives/expiring-premiums and
          truncated sales tax for sewage police lawsuits]."
          <h2>
            at home disability care when mental health is considered a
            disabiliity and on the forefront of economic theory or victim of
            false bid pools and accrual means mentally-unhealthy
          </h2>
          giving to anyone with a kid isn't welfare it is parental trust
          buiding, gerontocracy like they keep us out of work and in school
          while they profit off the bonds 40% debt spending (50% in states)
          <br />
          <h2>“We enjoy an incredible inheritance.” - Stephen Cortes</h2>
          <h2>
            annual pce to gdp (left), mortgage debt, federal debt, (v2 - (GDP /
            (m2 - currencyComponentOfM1))) * currencyComponentOfM1 (right)
          </h2>
          <Cable
            style={{ width: "100%", height: "570px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nofred
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=KalW&width=670&height=475"
              // JgMC,G8nU
            }
            float="left"
            title="https://fred.stlouisfed.org/graph/?g=KalW"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Intermediate goods are counted twice even though it is the same
          product, in the labor and the final sale, when going thru management
          <br />
          <br />
          hours worked would lower price, and tax payers can only be called that
          when they pay 100% of monopsony. rot in hell&nbsp;
          <a href="https://foiegras.life">dominic carter</a>
          <br />
          Can you not say tax payer because deficit is 40% normally uh $4t/yr,
          but wall st is 60/40 gov
          <br />
          <br />
          Tax payers are on vacation. Savers pay in price inelasticity of
          bid-to-ask now 11x accrual, and 44x&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=JgKF">compounded</a>,
          but since 3/2020 the government are trying to bailout, the second
          phase of trickle down with debt slavery by proxy collateral
          repossessed and down payments kept, options to buy upon estimates of
          intermediate labor and material unbought (settled) at all
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1fkbmhkzsC9O_5SwDBOyE58yifRCqR9u0/preview"
            }
            float="left"
            title="American Agenda - Thomas J Philipson essentially racketeering economics and money/population growth as productivity instead of price-deflation per hour over time"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "a&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=JgJ8">recession</a>
          &nbsp;of production of output, and an increase of disposable income
          and government stimulus. more-, better-than any boom in the past. it
          will happen again if we get this program thru"
          <br />
          <br />
          “a lot of rhetoric coming out for sure, if wages double and prices
          double you are pretty much[ as] well off” “business friendly expanding
          supply is downward pressure of prices” only if supply is alchemy less
          elastic money or accrual…
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1-AEb73Y9aHnq2LcwUKE7dL0x5MbM7N8L/preview"
            }
            float="right"
            title="American Agenda - Betsy Brantner Smith truncated sales tax and reverse"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            reverse don't cancel,&nbsp;
            <a href="https://truncatedsalestax.com">then</a>...
          </h2>
          “Police are not the problem, criminals are the problem,” unless the
          laws are criminal by contradicting for fence-sitting and trial
          malfeasance over caste solutions, or comparatively discriminating
          innocence. she literally makes profit on net loss bonds, false bid
          pools & closed source licensure
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1PlrEygGMs5WDyBE1gNhCDGYA09nYSou6/preview"
            }
            float="left"
            title="American Agenda - Rep Alex Mooney"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          recessions and inflation is an oxymoron. accrual nor duress beyond mvp
          isn't free market, the private is 60/40 debt to gov share
          <br />
          free-rider-mutable tax & 40% debt-spending
          <h2>
            rent-seeking pipelines & broadband instead of consumer surrogate
          </h2>
          Push for socialism is terrible for my state, calling it
          infrastructure, they are “clever” in naming of things. We don’t want
          socialism. Then call it “market-communism."
          <br />
          <br />
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1_DLj_PnDTGuRNt4LDyHnP0zmpzuHBCm3/preview"
            }
            float="right"
            title="GBNews - Green Party Researcher Laurie Laybourn-Langton on nationalizing rent-seeking"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Substantial discount to market rates," gdp/down =
          <a href="https://youtu.be/OqgUxnqc3AM">11x</a>&nbsp;(44x by compound)
          isn’t a market rate is it? When&nbsp;
          <a href="https://fb.watch/9vBobshL3S/">money</a>&nbsp;market is given
          green credence&nbsp;
          <span role="img" aria-label="reverse (don't cancel) emoji">
            🔄
          </span>
          <br />
          <br />
          “Why should we be making money on things people need?” If it has
          operational costs and not a perpetual motion machine, it is making
          profits outlaid immediately, or not. Target margin consumer surrogate
          instead of free rider mutable tax nor 40% debt-spending, embossing the
          lender-work-deficit
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1nsoqkKhaaXFV9ncUNSvBqUZ060iD3ZZ4/preview"
            }
            float="left"
            title="Newsmax attorney speaks on Ahmaud Arbery jury"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Followed the law, did their job, and nothing was tainted.” Those can
          be oxymorons, law being precedence by comparative innocent or
          countervailing law. For instance, I have to boycott credit by making
          by own paytech as a ticket-seller, I've failed economics courses over
          disagreeing and false imprisonment is imbued by poor economic-policies
          of money chasing the same goods and exhasberating the working-class
          from lender-/landlord-work-deficit. just max profit royalty p2p and
          cap rent at 5 units / 30 days
          <br />
          <br />
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1DVQrJHoJkhRuxXsmoSokB5MNfjDPCxjp/preview"
            }
            float="right"
            title="GBNews - William Clouston on social-wage and immigration"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Women and children vs fit-young men." not only sacrificing working
          age but capturing wives
          <br />
          <br />
          People are naturally good, the system causes us to nuclear dilemma and
          compete with consumers (jury-for-business, emulate Pareto-efficiency
          with target-margin, nor corporate action except outlay profits
          immediately (501c, but dissolution to universe rather than state)).
          Charlie Kirk, "the worst thing a person can do is&nbsp;
          <a href="https://monthlyreview.org/2020/07/01/marx-and-slavery/#:~:text=It%20is%20worth%20noting">
            enslave
          </a>
          &nbsp;another human life. Literally own[, not just launder profits
          from nor emit duress in finite producer reality, and infinite producer
          reason, against third party beneficiary standing thru false bid pools
          (commercial banks, insurance, and investment banks in max profit
          royalty schedules (alt fin)) and accrual."
          <br />
          <h2>bite your tongue off</h2>
          You really are a nigger, jo pinion, an afro-tool. Not mine.
          insurances’ false bid "coverage" of non-concurrentables
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1FMro_t_iHrclYMk1Ui68VylNJ6K20QTy/preview"
            }
            float="left"
            title="Reverse, don't bailout new deal nor cancel forbidden by past demand, because prices are by poll"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Central-planning socialist means emulating infinite producers, that’s
          fine. You cannot have exorbitant margin nor duress discrepancy
          <br />
          <br />
          Wall st/Gov debt spending 40% and free rider mutable tax (ex sewage
          police lawsuits, truncated sales tax) is
          market-communist/rent-seeking/outlay-withholding
          <br />
          <br />
          supreme court case disability insurance 2015 work ability: Can’t
          assume employers, I’ve applied to many remote, sit-down jobs. but I
          won't take credit as income (is counterfeit)
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1krzfgwYZO5udSDRfLmdfFY_q00WMElAx/preview"
            }
            float="right"
            title="Barney Frank on public insurance over private insurance, like third party beneficiary suspension of malfeasance isn't an option"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          like third party beneficiary suspension of malfeasance isn't an
          option?
          <h2>poorness=(poverty/equality)</h2>
          trillion of dollars lowers poverty by bailing out accrued-invoices
          <br />
          Amortize the cash:debt*income reversal of the credit-cycle of
          impossible forclosures with down payments kept, and paid from 40% debt
          spending, is public insurance instead of premiums expiring like
          private insurance, not hidden
          <br />
          <br />
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1wBek-RLholsjwKQN4Z4aQX0ArvBd8LrV/preview"
            }
            float="left"
            title="Social security threat - a century earlier"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “With social security, everything you were going to do someday, is on
          the calendar.”
          <br />
          When the world begins to spin again…
          <br />
          <br />
          Jails (especially with net loss bond and false bid pool profit) are
          the&nbsp;
          <a href="https://youtu.be/10kjUOVqk7o">new Jim croe</a>, I don’t have
          my guns! Nor the ability to be payee of my disability (actual
          laceration unhealed, not opinion of non-physical&nbsp;
          <a href="https://humanharvest.info">fact</a>)
          <br />
          <h2
            style={{
              backgroundColor: "black",
              color: "white"
            }}
          >
            Can’t reverse per trial, which the state takes over class-solving
          </h2>
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1ku0d_e0LBmS-1-qlqcQv4ya_Uh7fcQcr/preview"
            }
            float="right"
            title="GBNews - Darren McCaffrey interviews a money/person growther"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          Growth of money (certificate on the market without “money-market” in
          implausible use nor false bid pool form) is elastic, and the growth of
          jobs without utility by consumer-propensity of bid with demand
          exclusively labor, is busy-work and useless bid-to-ask inelasticity in
          the same way.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1CjFscmbKOshuCib8PUA53LEaMVIRJeMZ/preview"
            }
            float="left"
            title="National Report Thanksgiving and Hanukkah with Bob Sellers - Rabbi Simon Jacobson"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Quality/quantity
          <br />
          Spirit/matter
          <br />
          <br />
          How bizarre!
          <br />
          <br />
          Pipeline for rent-seeking and contractor for without target-margin
          consumer surrogate instead is nothing like a collective bargain in an
          immediate (as-can-be) escrow written for and of without fraudulent
          compounding and laundering with consumers in supply chain slighted
          unbeknowst among finite producers but free to operate on the infinite
          producer Pareto assumption, in jury-for-business of mvp duress and
          pricing, generally
          <br />
          <br />
          “Dollar is losing value” it is share split for 10-40% fed-state
          bond-laundering and 40-50% fed-state debt-spending
          <h2>
            “Give you a job,” you aren’t giving a show, it is a trade. “Let me
            trade you a job.”
          </h2>
          Slavery is cheap but the loss of comparative advantage really
          surmounts by complacency
          <h2 style={{ backgroundColor: "rgb(150,200,255)", color: "black" }}>
            “Interests and values”
          </h2>
          <br />
          we (
          <a href="https://thecollegeinvestor.com/14611/average-net-worth-millennials/">
            young millennials
          </a>
          ) work 10x more for&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">homes</a> and have
          half as many&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=H5XB">unemployed</a>
          -to-population, with 20x/person less&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">rental</a>-income
          than 55+ (controlled-recessions equalizes this)
          <h2>
            <a href="https://www.goldmansachs.com/insights/archive/millennials/">
              Gerontocracy
            </a>
            &nbsp;of false bid pools on expiring premiums, 11x &nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=Jgn6">accrual</a>
            -on-collateral kept upon reposession purposefully & impossibly,
            implausible&nbsp;<a href="https://30under5.us">use</a>
            &nbsp;rental-income beyond 5 units | 30 days,
            collectively-bargaining on checking and escrow accounts
            without&nbsp;
            <a href="https://3under2.us">reason</a>&nbsp;to withhold&nbsp;
            <a href="https://vaults.biz">outlay</a>&&nbsp;
            <a href="https://squatcommune.com">claims</a>,&nbsp;
            <a href="https://teapharmacy.party">closed-source-licensure</a>,
            lender-/landlord-work-deficit and working-age-deficit, free rider
            mutable tax & 40% debt spending, and the fallacy that more money
            makes working-age less ask-price-gain{/**Matthew Shay */},&nbsp;
            <a href="https://truncatedsalestax.com">police</a>&nbsp;that make
            profit by net loss thru bonds and psychologists that make profit by
            net loss thru false bid pools, general-income investments by
            investment banks and people for collective bargaining fraud of
            non-concurrentable schedules of outlays (for insurance, claims or
            hours of mechanics, doctors, etc.), progresses to place homeless in
            institutions
          </h2>
          my very-real injury, regardless
          <br />
          <br />
          Prisoners’ dilemma rollover insurance false bid pools… said
          non-rollover before&nbsp;
          <a href="https://youtu.be/aJEszZK54dw">Krugman</a>&nbsp;(but was
          after) because it was before&nbsp;
          <a href="https://youtu.be/ny1HwqaFytg">Carrier</a>/RiverviewMedCtr 13
          days falsely incarcerated
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/eH6XcnIlCuk"
            }
            float="right"
            title="Disability taken by borrowing loiterer"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          The racketeering state would rather trials instead of solve the class
          <h2>Why would you work against $3k/year/person new debt</h2>
          “The jury found not not guilty,” still presents necessary but not
          sufficient
          <br />
          <br />
          It’s impossible to work against debt, so they give disability to the
          collateralized loan parent, ignoring the unhealed-, deep-laceration
          from a guard rail near a trail and instead slandering without
          biological-malformity but an opinion of people with a conflict of
          interest, the very same fraudulent income that was cited as “bizarre,”
          and Paul Krugman cites as a “net loss,” false bid pooling non-rollover
          insurance (expiring premiums are collective bargaining fraud)
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1cDO9mWzpIOzI_xwJaEDLUkIuB8nqMa27/preview"
            }
            float="left"
            title="Will Shatner on insurance false bid pools and collective bargaining fraud"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          Eliminate co-pays for no extra cost, for net loss
          <br />
          <br />
          <Cable
            style={{ height: "350px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1B7L7XghMjQuiG80V7OBSX7c6FPoQCSQS/preview"
            }
            float="right"
            title="Cronus Bill O'Reilly false bid pooling and implausible landlord use intent beyond 5 units or 30 days of auto or units"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Predictable income. Double digit bonus return,” Bill O’Reilly
          counterfeiting bid and implausibly-able-to-use rental-units
          <br />
          <br />
          lawfully using their own words against countervailing laws and illegal
          precedence, racketeering licensing boards in furtherance than merely
          class resolution for trial like expiring premiums and false bid pool
          work deficit for monthly deductible & copay (
          <a href="https://www.ftc.gov/sites/default/files/documents/statutes/credit-card-accountability-responsibility-and-disclosure-act-2009-credit-card-act/credit-card-pub-l-111-24_0.pdf#page=21">
            but not amortized!
          </a>
          )
          <br />
          <br />
          purposefully-impossible is a checkmate
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1f-aFDk8zXZI2V4EW7azfl2wR_zJV4Ka5/preview"
            }
            float="left"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          What is a treatment program? Just keep them in jail
          <br />
          <br />
          <a href="https://teapharmacy.party">they still have my Giant nugg</a>
          <h2>Bail and malfeasance means you don’t have the evidence</h2>
          "taxes is the biggest problem," does not mean 40-50% debt spending
          (how to make profit on net loss; e.g. do bipartisans fixate on the
          last meal idea, like a bunch of cucks?), obviously without people
          voting. 1. outlay corporate profits, today! 2. cash:debt*income thru
          history 3. truncatedsalestax 2025 against menendez for free rider
          immutable sewage police lawsuits, no more animal-testing,
          closed-source-licensure-racketeering and
          countervailing-law/illegal-precedence class precedence malfeasance and
          industry-expert-saveface or precedencial interest.
          <h2>
            oh,&nbsp;
            <a href="https://www.healthline.com/health/shingles-vs-herpes">
              the dread
            </a>
            &nbsp;
            <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
              hypocrites
            </a>
            ,&nbsp;<a href="https://saverparty.xyz">humanharvest.info</a>,
            excess antibodies attacking your own cell-with-spore causes&nbsp;
            <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
              hot node leakage
            </a>
            , duh
          </h2>
          "People homeless is stupidity, a psychological problem," Rep Glenn
          Grothman, distributor of misinformation. see below for actual cause,
          not byproduct nor mental-opinion before brain malformity. The right
          are prejudicial all hell. Messy hair makes me disabled, Tom Basile?
          You just want to prevent wall st blame and ignore 60/40 wall st/gov
          new debt at $3k/year/person before 3/2020 population growth
          significant death fraud and cases vs asymptomatic-tests fallacy
          <br />
          <br />
          Cognitive testing is nearly as subjective as mental health over
          actual, literal, “brain malformity,” to cognitive test, being merely a
          measure against the test-makers’ perspective, presentation &
          nomenclature. After all, the right answer isn't always the common one,
          like the Earth around the Sun or it mattering-not whether the chicken
          or shell, "came first"
          <br />
          <br />
          Indigent doesn't give right to rent-seek and gentrify housing nor add
          money for same intermediate-material-labor, essentially making
          consumer law on estimates force majeure on purpose, it is so obvious.
          Incarceration is profit with such net loss operation with bonds &
          false bid pools of expiring non-concurrentable insurance
          <br />
          <br />
          Indigent because 10x hours per median home, half
          unemployed:working-age cohort size, 20x/person 55+/millennial
          rental-income, not capping implausible landlord use and
          lender-work-deficit to consumer-awaited-outlays for collatteral
          loitered and down payments laundered kept upon credit cycle forclosure
          reposession of transitory supply chain prices
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/sbIoxEP41J8"
            }
            float="left"
            title="Dr Henderson Review Video Testimony & false mental-institution conviction, bizarre for non-rollover insurance whistleblower"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ width: "400px", maxWidth: "100vw", height: "400px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1NGR6kw3SJvf-L64eVhCK9QVgP2YovMqD/preview"
            }
            float="left"
            title="Dr Henderson Review on Google, recinding of mental-illness claim online, apologizing for my 'knee appointment'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          {this.state.serviceCancelingImages && (
            <a href="https://www.google.com/maps/contrib/116647982166856941576/reviews/@40.289901,-74.0840547,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US">
              reviews
            </a>
          )}
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1g8x1S-kvf8xdXxTrMCmj_2hlEfwBbbBe/preview"
            }
            float="right"
            title="My Stepfather walks into an amortization/worth contest"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          <h2>
            I would rather SSA not share-split the dollars I do have instead of
            give it to my mother's loan sharks
          </h2>
          "In order to receive disability, take the medication." One has nothing
          to do with the other, the latter being an opinion rather than
          biological fact, to boot. Mental illness isn't a disability nor is it
          affirmitively solved by your medications. I have a hole in my leg.
          Isn't that enough?
          <br />
          <br />
          More people are oppressed than 1k years ago, as it was half at most,
          by race. 10x more hours than 1970 working-age, to own a home
          <br />
          <br />
          “Turning their people into their chattel, it is their[ whole scheme],”
          Josh Dawsey
          <br />
          <br />
          "Zero privacy/security anarchy/China"
          <br />
          <a href="https://login.gov">Convict intranet</a>&nbsp;with
          tamper-proof grid dns for repeat offenders is NOT HARD 80k/yr missing
          children forever is your fault,&nbsp;
          <a href="https://thumbprint.us/phone">the dear reader</a>
          <br />
          <br />
          "It was called treason, now it is just called business[, article 3 is
          bond-laundering 10-40% fed-state $1t/$7t/$28t China/foreign/domestic.
          also, kidney harvesting!]"
          <br />
          <br />
          <TwitterTweetEmbed
            style={{ float: "left", width: "300px" }}
            key="1411470492834439171"
            tweetId="1411470492834439171"
          />
          the overwhelming evidence suggests the virus is merely a byproduct of
          bacterial-infection
          <br />
          Making it easier to adopt with more money is a fallacy since
          <br />
          More money for the same goods
          <br />
          I’m living without rents
          <br />
          <br />
          "To learn about our programs, and to donate."
          <br />
          <br />
          landlords implausible and borrowers loitering is menace of society
          <br />
          <br />
          FUCK WORKING CLASS AMERICANS and existing small biz, what about the
          open-source-contributors and new biz
          <br />
          <br />
          "fixed incomes that inflation will impact the most," but they make
          money on what causes inflation...
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1cP5V86FWOxqaOjI3wm5SkxylZZSPinKf/preview"
            }
            float="left"
            title="My Mother is taking a deal that isn't hers to make"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1YpWrPXXlhBHsLq06FXuhBnILH12Yk2NZ/preview"
            }
            float="right"
            title="Steve Cortes - corporate work deficit"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          I'm not crazy!
          <br />
          <br />
          My mom is the designated payee on my disability because my hair is
          messy, but she is the one with collateralized debt, my debt is just
          consumer, they can’t touch it so the state wants to bail her out with
          my money
          <br />
          <br />
          pig
          <br />
          <br />
          working against $3k/year/person instead of for your own (not resume
          buffing, but copyright), in a market commune, withheld outlays, to
          boot, is retarded
          <br />
          <br />
          backpayments on disability over appeal for no reason, you, SSA, are
          the treasury. assigning to the indebted-collateral-mother instead of
          the physically-injured-son because the latter is assumed to make poor
          choices with money. I am a competitor of the SPX and thought my trades
          were anonymous like 13d filers
          <br />
          <br />I am called bizarre by orthopedic surgeons for a net loss profit
          by false bid pools
          <h2>
            SSA Disability is giving my mother my $45k award without my appeal
            for only $15k because their debt has collateral and mine doesn't,
            and they will let her set the rent instead of allow me to even move
            out with it
          </h2>
          <br />
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1_8PTGz0yGAPZd1AMlq3o8V4BxH-TC_UX/preview"
            }
            float="right"
            title="Greg Kelly - Seb Gorka fill in with Rudy Giuliani, racketeering"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “If you have to borrow some, borrow some;” you can always tax or have
          help if the cause is virtuous
          <br />
          <br />
          “Durable inflation” “no, inflation is change, need to spend on
          services instead to level it out”
          <br />
          "supply and demand issues by a bridge," fucking tart
          <h2>
            <span style={{ color: "rgb(80,100,200)" }}>
              Unvaccinated and other mobidity issues are more suceptible
              to&nbsp;
              <a
                style={{ color: "rgb(80,100,200)" }}
                href="https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/"
              >
                deady diseases
              </a>
              <span style={{ color: "black" }}>
                [, by asymptomatic-testing as opposed to cases]
              </span>
              ," Dr Leanna Wen
            </span>
          </h2>
          <h2 style={{ color: "darkgreen" }}>
            “How can my mortgage work for me? Can it be better, always yes.
            American home financings, greater overall savings shorter terms or
            refinancing debt. Saving over $1k/mo. 10 minutes to save a fortune,
            at least a small fortune,” Mark Levin
          </h2>
          <Cable
            style={{ maxWidth: "450px", width: "100%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1rfCRVDV_LPMY1d5zw-5CWTECTteM3Vd9/preview"
            }
            float="left"
            title="Phychology today - Lee Jussim cultural marxism vs marxism co-opt graphic-table by issue"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          At least the cnn masterbaiter isn’t on the side of the gentrified
          manufacturing class, G-d's chosen people
          <br />
          <br />
          “‘Reserves’ to a commodity trader is like a ‘savings account,’ if your
          car breaks down, you’re in a lot of trouble. It will cost you and I.”
          Carl Higbie
          <br />
          <h2>
            Parks/copyright/services; america first means we make things without
            nationalism and with utility open source licensure
          </h2>
          $2t bill signed, right?” “Yup!” Affirms the bailout laundering is the
          second phase of the trickle down bailout for less income inequality
          but kept down payment unamortized for that collateral correction if
          without debt:cash third party beneficiary bid-to-ask &
          hung-jury-permit inelasticity business-/credit-cycle for the national
          security perpetual motion machine that is durable earth, not escrow
          for general account or grandiose scope with an option to buy upon
          estimates
          <br />
          <br />
          existing business is complacency, ppp is trust building, new business
          need support.
          <br />
          <br />
          why would you work against the&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=Jde9">
            $3k/year/person
          </a>
          &nbsp;busy-work that is lender-/landlord-work-deficit
          <br />
          <br />
          rent-seeking and gentrification in
          <br />
          &bull; tolls and broadband
          <br />
          &bull; housing
          <br />
          &bull; healthcare
          <br />
          &bull; jury-permitting (jury for business)
          <br />
          <br />
          making money on net loss bonds in
          <br />
          &bull; incarceration
          <br />
          &bull; war
          <br />
          &bull;&nbsp;{/*https://fred.stlouisfed.org/graph/?g=C6m9*/}
          <a href="https://fred.stlouisfed.org/graph/?g=JdcJ">
            invoicing/down-payments 11/1
          </a>
          &nbsp;& somehow&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=IHdV">40-50% debt</a>
          <br />
          <br />
          flopping on
          <br />
          &bull; truncated sales tax 2025 against menendez
          <br />
          &bull; amortize cash:debt*income price-deflation without debt
          inelasticity of bid-to-ask
          <br />
          &bull; false bid pool, invoices & implausible use landlords denouncing
          <br />
          &bull; timelesspaydayroyalty with max profit (RCWMP) scoped for
          industry-type per person-to-person
          <br />
          <br />
          Tranqulity means users need to be paid to be discriminated for quality
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1RPpkz7tmeuFelQ2if-b9SV1bQAlkJ9tc/preview"
            }
            float="left"
            title="National Report (Newsmax) - Lt. William Kelly, Va with Shaun Kraisman"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "I did not break policy nor was my removal warranted[: and my opinion
          was acquitted by reasonable doubt of malintent nor reckless behavior,
          given open carry laws and noted absence of luggage requirements],"
          <br />
          <br />
          Duress doesn’t allow consumers to find the most efficient brands on
          the quality/price skew
          <br />
          <br />
          We need to hold counterfeiters and loitering-borrowers dealing in
          credit to the same standard, be them black drug users dealing in cash
          or white pharmacy false bid pool sellers dealing in credit
          <h2>
            GOP: blue collar incrimination, only &nbsp;
            <span style={{ color: "red" }}>
              Lidia Curanai is delusional, her income is from third party
              beneficiary-countefeit
            </span>
          </h2>
          cases vs asymptomatic testing is the fallacy, no damage from covid,
          just naivety.&nbsp;
          <a href="https://humanharvest.info">Trust statisticians</a>, not
          doctors' save-face
          <br />
          Don’t betroth statistical assumptions to determinism
          <br />
          <h2>
            Communist defined by Marx isn't a market communist, but one that
            emulated infinite producers in jury, for business!
          </h2>
          Biden is selling out oil reserves because I am calling dollars, 20% US
          lands, instead of target margin networks instead of
          rent-seeking-gov/wall st gentrification, gerontocrazy 20x/person
          rental-income laundered to principal value, not utility.... then ran
          the gamit of down payment upon reposession. Marx communist was first
          to betroth market-communist credit cycle as improper property, utility
          in finite producer reality too, keeping labor to exclusively demand,
          with tranquility, not-surrendered by contracts-counterfeit mootable
          <h2>an option to buy on estimate</h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1zyspe55pdTgbQlfsPbgWjVkTDX1QPLhv/preview"
            }
            float="left"
            title="John Bachmann Now - Jill Simonian, Director of Outreach for PragerU.com/kids"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “We need our kids to know that America is an overarching ‘good’
          place,”
          <br />
          <br />
          open-source-automatic-licensure (right to try & not compete with
          consumers) can solve animal-testing and immigrant working age can
          solve the lender-work deficit, or amortize the credit cycle so income
          and purchases are reverse engineered for the
          durable-concurrentable-collateral to be where it should have been
          without debt-inelasticity of false bid-to-ask of counterfeiter,
          fraudulent concurrentable collective bargainable units, and
          implausible use rentier
          <br />
          <br />
          Non-voters won, and ideologically-duressed voters can split both major
          parties
          <div
            style={{
              width: "min-content",
              transform: "translateX(50%)",
              padding: "20px",
              //backgroundColor: "white",
              WebkitTextStroke: "1px black",
              color: "white",
              border: "3px solid black",
              borderRadius: "30px",
              textAlign: "center",
              fontSize: "26px"
            }}
          >
            SaverParty.xyz
          </div>
          <span style={{ backgroundColor: "red" }}>
            Republicans aren't freedom, they have business mandates and ignore
            the fact that infinite producers is merely a grave microeconomic
            assumption
          </span>
          <br />
          <br />
          $600m revenue over the next decade $367m debt -heritage action freaks
          out about only 20% of regular spending at $4t/yr 1/4 pentagon, 1/4
          pensions, 1/4 premiums not becoming currencyComponentOfM1 checking,
          how? 40-50% debt spending, 10-40% bond laundering debt servicing by
          landlord-work-deficit 20x/person 55+/millennial, half disability and
          insurance to 65+ retirees, dead-weight inflation from price-deflation
          because of rentier over escrow
          <br />
          admin only wants to go after income over $400k/yr, because
          $3k/year/person is new debt
          <br />
          <br />
          The qualifier: “He is mentally unstable because he said, ‘I’m going to
          run people over this Rittenhouse thing,’” not home sales in 11x
          down-payments? Gerontocracy laundering loiterers to counterfeiters in
          contract. wait for customers and investment bank towards
          concurrentable equity, only.
          <h2>
            abolish bond-index-funds, mental-illness without dent-in-head
            disqualifier, implausible landlord use, credit cycle keep down
            payments upon repo and value-correction, and false bid pooling
          </h2>
          NJ calls you&nbsp;
          <a href="https://truncatedsalestax.com">mentally insane</a>, off-jury
          duty & lock up for 13 days take away rights to handle my own money if
          you agree with&nbsp;
          <a href="https://youtu.be/aJEszZK54dw">Paul Krugman</a>, who
          plagerized you, on some things. laundering the share-split to
          borrowing loiterers being my parents who spend before collecting and
          merely lose money
          <br />
          <br />
          Fines instead of stateless-victimized-torts by consumers (including
          corporations as are demand-surrogate) permits lying, evidently by my
          experience at RiverviewMedCtr in Red Bank, NJ, whom say I “kicked and
          punched,” trying to elope, with good reason, too. They won’t even show
          authorities the footage
          <br />
          <br />
          “That’s a big family!”
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1bkuUkDe9iyAJGWytn-jtihhCjiCRkC1B/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - Bob sellers comments on the family debts, market-communism on the wall st update, nearly"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Dear Mom,
          <br />
          You waste more money than I do, please do not spend my backpayments
          from SSA on your debts, nor rent imagined by you. Borrowers loiter on
          savers’ resources, but I clean enough to earn my keep in the basement
          that is implausibly-utilitarious by yourselves. I have a different
          strategy with consumers debts that cannot touch my
          copyright-properties in foreclosure. Apparently, you said I pushed you
          so that you can take my disability, and launder it to your crediting
          counterfeiters and options to buy upon estimates
          <br />
          <br />
          they are also giving me 1/3 of what I would have earned without the
          torn vastus medialis dependent anatomy as a summer-bartender
          $45k/3-years, backpaid SSA disability & insurance for assuming 5k
          applications would fire me in my self-trained youtube-video dev work
          <br />
          <br />A return on net loss is conflict of interest. The right isn't
          voluntary at all. Wait for customers
          <h2>Demand needs to be labor, exclusively</h2>
          You can desist plagiarism claims with spark of genius, unless the
          defending-accuser has their own to keep reasonable doubt I wasn’t the
          start. Regardless, see how I am treated with MORE detail into
          fraudulent collective bargaining on non-concurrentable outlay & hours
          schedules of false bid pools of expiring-non-rollover insurance.
          Redraft every season for non-compete emulation of infinite producers
          in microeconomic theory of supply and demand, x-axis being output
          productivity per hour by price-deflation, squandered by 40/60 gov/wall
          st, $8/day/person pre-3/2020 new third party beneficiary
          illegal-precedence of dollar-share split in contract, counterfeited
          <br />
          <br />
          population begets labor-competition, not inflation, nearly constant
          gdp/p 1800-1913
          <h2>
            Common sense are a bunch of followers&nbsp;
            <span
              style={{
                color: "grey"
              }}
            >
              10x hours per median home since 1970 half-life ago
            </span>
          </h2>
          inflation isn't expectation nor dollar-share-split, but debt
          inelasticity bid-to-ask and lender-work-deficit
          <br />
          <h2
            style={{
              backgroundColor: "rgb(197, 179, 88)",
              color: "black"
            }}
          >
            Price-deflation over hours halves every 5 years while gdp/p was
            nearly constant before 1913, debt and money double every 10, home
            prices every 20, non-durable goods every 40
          </h2>
          <br />
          No reason for a qualified immunity for politicians means it is just a
          placard. Even the chief commander isn't literally, "under fire,"
          statute of limitations has no reason either.
          <br />
          <br />
          "Solicit" requites line-itemized, racketeering is false pool bid in
          general account
          <br />
          <h2>Anti-credit union</h2>
          <br />
          Malice=malignant heart
          <br />
          options to buy on estimate is grandiose scope, let my
          home-contracting-parents take the better bid, that is full
          <h2>
            Marxist communists would not oversell like market communists. We
            want to emulate infinite producers with regulations of duress in
            false bid pool expiring insurance, invoices with down payments kept
            upon repossession purposeful-impossibilities and implausible
            landlord use
          </h2>
          No rent seeking for even free rider immutables
          <br />
          By gov nor wall st
          <br />
          Abolish corporate profits, outlay escrow immediately or investment
          partnerships wait for customers over business-line
          <br />
          <h2>
            aba racketeering class precedence malfeasance, interested in
            incarceration for net loss is profit when bonds instead of truncated
            sales tax for free rider immutable sewage police lawsuits
          </h2>
          Bias or interest in the case, for or against. How can you not?
          <br />
          Interest needs to be financial or industry, not merely consumer
          <br />
          No inference hurtful
          <br />
          For statement to be voluntary the statement must be given without
          leniency nor reward, free will without compulsion nor necessity borne
          by others
          <br />
          If not voluntary, don’t consider it for any purpose
          <br />
          Coercion Duress fear of violence threats of injury, or any suggestions
          or promises of leniency nor reward. As in monthly savings of false bid
          pools and higher deductibles, or for the borrower the ability to
          loiter merely at greater principal price, under succh duress
          <br />
          <br />
          debt:cash*income thru history bid-to-ask inelasticity can be amortized
          for past purchases as to respect third party beneficiary laws.
          Canceling, bailing out/new dealing debt nor "credit-cycle" keeping
          down payments upon repossession force majeure estimated option to buy
          <br />
          <br />
          net loss incarceration and death is a net gain when valued in dollars
          from bonds
          <h2>dealing durable public park deeds for my copyright-royalties</h2>
          Old people: "you know what you are getting into unless on-site
          {/**unless guard-rail is next to tail-entry */}, false pool bids are
          additive," closed-source-licensure with uspto-grunts does that.
          utility patents are discoveries and copyright is sufficient. Shapes
          and etymology too-broad aren't to be owned
          <h2>
            Is the victimized state, lender or landlord a conflict of interest?
          </h2>
          if people want to fight, they will
          <br />
          <Cable
            style={{ height: "300px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1DQFNpt07XWPUCryIKxwusnR98KaPLWV3/preview"
            }
            float="left"
            title="'Wings for Victory' war bonds advertisement 'sky's the limit!"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1ljlBl_QHs-PKO4-iFbzlIAgUdBbv4nuo/preview"
            }
            float="right"
            title="Bernie and Sid (77WABC) - Nov 23 2021, alternative gov truncated sales tax after amortization of options to buy estimates"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          lender-work-deficit is the greatest cause of inflation, wrapped up
          into a three-word-chant
          <br />
          <br />
          most gdp is mortgages
          <br />
          <br />
          raised bonds allows those guys not to work for the same intermediate
          goods. Colonizer - not exactly output-productivity per hour by
          price-deflation
          <br />
          <br />
          Such a dramatist cannot wait for profits by accrual and false bid
          pools. Banks keep out of max-profit-royalties & insurance keep out of
          claims outlays non-concurrent schedule upon 1/11 down-payments/gdp
          (actual customers & jobs), keep in equity concurrentable. Only way out
          is to amortize, not cancel nor keep down payment upon repo “business
          cycle” (bailout fractional-reserve share-split). Dollars are 20% US
          lands, gdp/p before 1913 was nearly constant micro-theory.com&nbsp;
          <span
            style={{
              fontWeight: "bolder"
            }}
          >
            cap 5 units /30 days, non-voters keep winning
          </span>
          <br />
          <br />
          “Can you be a fair and objective person,” regardless of
          time-constraints
          <br />
          Need all people included, not detractors from favored countervailing
          laws, precedence and comparative innocence
          <br />
          <br />
          1/3 try is owned by foreigners, $1t/$7t being China
          <br />
          <br />
          credit is useless price inelasticity the same intermediate-goods
          <br />
          <br />
          “Provide Taiwan with weapons to sustain themselves,” why don’t you
          allow them to make their own? Our money funding that only inflates as
          would intermediate good like free rider mutable tax and 40-50%
          fed-state debt spending, 10-40% debt service bond laundering
          <br />
          <br />
          <Cable
            style={{ width: "100%", minWidth: "30vw", maxWidth: "30%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/OqgUxnqc3AM"
            }
            float="left"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ width: "100%", minWidth: "30vw", maxWidth: "30%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/1D6n2om9I6A"
            }
            float="left"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ width: "100%", minWidth: "30vw", maxWidth: "30%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/AJWkVjK7u48"
            }
            float="left"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          boycotting credit, gdp:down payment isn't a job, and accrual/grandiose
          scope with estimate insurance isn't a customer but false bid pool
          <h2>third party bene, anti-rent-seeker-bona-fides</h2>
          You can be vaccinated and spread it, you can be unvaccinated and
          spread it. That is not an artifact, but a symptom
          <br />
          Dems want to lower bail and nobody wants to raise rates let alone
          reverse
          <br />
          <br />
          Bail instead of keeping them in jail? Isn't that racketeering? Do
          donors get money back? Bonds compound third party beneficiary
          laundered
          <br />
          <br />
          “Protect your retirement income with gold,” Bo Snerdley (back to
          back&nbsp;
          <a href="https://www.youtube.com/watch?v=wxiMrvDbq3s">
            public park divestment
          </a>
          )
          <br />
          <br />
          <TwitterTweetEmbed
            style={{ float: "right", width: "300px" }}
            key="1429182687588278276"
            tweetId="1429182687588278276"
          />
          "Jury selection and cameras in courtrooms to prevent tyranny of[
          industry-precedence-interest, not reason even 1/12 upon conviction or
          permitting mvp-duress nuts are to be excluded]"
          <br />
          <br />
          The only way out of supply chain problem is working age immigration or
          amortization of lender-work-deficit
          <br />
          <br />
          <Cable
            style={{
              height: "470px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1nQ3nEEiA8HnytQM_jg0KZ3PYs7lInnYx/preview"
            }
            float="left"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          new deal cuts income inequality in half!
          <h2>Inflation doesn't discount bailout</h2>
          immmigration of working-age, amortization of debt correction instead
          of keeping down payments upon repossession nor cancel forbidden by
          past laborequity.org&nbsp;<a href="https://saverparty.xyz">savings</a>
          <br />
          <br />
          home equity loans places principal-risk from the lender into
          purposefully-impossible intent to foreclose and keep down-payments
          <h2>false bid pools and options to buy estimates, a hypocrisy</h2>
          Amortize
          <br />
          ​abolish bonds as private property
          <br />
          ​same as all competing with consumer false pool bids and implausible
          use intent detection
          <br />
          ​socialism isn't broadband rent-seeking hud rent-seekig, nor
          reappropriating labor, it is to emulate infinite producers with
          jury-permits for min viable product duress+target-margin
          consumer-surrogate
          <br />
          covid is 1 year lower life expectancy than flu*, but 2015 75+ 1.2m/yr
          ppl
          <br />
          <h2>jury-science please</h2>
          greens won't amortize, they might outlay corporate profits, today!
          non-voters are plural-majority lmao
          <br />
          <br />
          collective bargain my checking acc
          <br />
          false bid pools are like corporate escrow profits withheld for what?
          <br />
          <Cable
            style={{
              width: "615px",
              height: "470px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://www.slideshare.net/NicholasCarducci/slideshelf"
            }
            float="left"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          If it is true 41k year carbon cycles are from humans and not natural
          binding, then humans must go extinct
          <br />
          <br />
          <h2>intra-mediate scopebook</h2>
          false bid pools are on time, working together (that is escrow-withheld
          is grandiose scope standing, as would an estimate, especially without
          utilitarian-choke-points in&nbsp;
          <a href="https://scopes.cc">outlays for labor & materials</a>)
          Obfuscating mental health with HUD/wall st 40/60 gentrification &
          rent-seeking
          <br />
          <br />
          price-inelasticity of&nbsp;
          <a href="https://foiegras.life">bid-to ask</a>, consent is not granted
          when a third party is concerned, implicitly without tort lest&nbsp;
          <a
            href="https://nationalsecuritycasino.com"
            style={{ textDecoration: "none" }}
          >
            <span style={{ color: "red" }}>class</span>&nbsp;
            <span style={{ backgroundColor: "black", color: "white" }}>
              precedence
            </span>
            &nbsp;
            <span style={{ color: "blue" }}>malfeasance</span>
          </a>
          <h2>
            free portrayed by free rider mutable tax from consumers of other
            markets inflation, lender-work-deficit & 40-50% fed-state debt
            spending,&nbsp;
            <h1 style={{ fontSize: "24px" }}>
              40/60 gov/wall st new debt $8/day/person
            </h1>
            (pre-3/2020)
          </h2>
          hung-jury-permits, in mvp-duress, are unconstitutional
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100064690506088%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
            }
            float="left"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            Pipeline nor the border will Biden push back,” toensing against
            working-age-recovery
          </h2>
          “President get paws on oil and gas [rent-seeking & gentrification, as
          opposed to target margin consumer surrogates, truncated sales tax 2025
          against menendez for free rider immutable sewage police lawsuits],”
          Logan Raddick
          <br />
          <br />
          living-like an consumer-laborer without
          competition-by-duress-nor-non-settlement, in a finite-producer world
          <h2>
            Not self defense when felony, except when the state (120% wall st)
            has a r&r monopsony
          </h2>
          Bernie calls welfare socialism because otherwise calling it
          share-split would lead in "accrual" to mean the same (description)
          <h2>
            Socialists isn't reappropriation, but truncated sales tax after
            amortization, not income, gift nor public share & 13D {">"}5 3-month
            disclosure, uuid non-anonymized, and false bid pool torts
            unamortized. &nbsp;
            <span
              style={{
                backgroundColor: "green",
                color: "white"
              }}
            >
              Outlay the means of production, durable-parks/hamberger-services,
              today!
            </span>
          </h2>
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1X6qODro1SMVRAvc-K_o2-mzs0I0Wj-PH/preview"
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="right"
            title="amortization of down payments upon repossession of collateral for third party beneficiary grounds"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          cases vs tests - excessive force, self-defense,
          hung-jury-permit-duress isn’t voluntary, but purposefully-impossible
          <br />
          <div style={{ backgroundColor: "rgb(170,80,200)", color: "white" }}>
            Dead-weight-as-rentier & "output-propensity" x-axis productivty-as
            per-hour price-deflation is what differs between this site and other
            microeconomics
          </div>
          <h2>
            Rudy Giuliani: “Your first impression can be wrong,” people can
            change, mishap for exogenous to moral core reason even without the
            law, between that and academic/political and comparative, is reason.
          </h2>
          Dr. Maria Ryan: “Your tax-payer money,” 40-50% debt-spending… “The
          wealthy keep the country going,” with $3k/year/person new debt ({">"}
          $400k income-taxes) whom own those bond-index-funds valued and keep
          down payments upon collateralization repossession
          <br />
          <h2>
            bipartisan rent-seeking instead of target-margin consumer surrogate
          </h2>
          working-class is better-off than non-working, and democrats want to
          "invest" with money from outside of that market for the same things
          and laundering to lenders and landlords, whom otherwise keep down
          payments upon repo
          <Cable
            onError={handleScollImgError}
            img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://www.dropbox.com/s/hatfsd34100ky5t/phil%20murphy.jpeg?raw=1"
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="left"
            title="https://newjerseyglobe.com/governor/phil-murphys-inside-outside-call/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          creating jobs by free rider mutable tax and 50% debt-spending for weed
          duress is not concent nor anything but trust-building, rent-seeking
          away from new innovation for r&d monopsony
          <br />
          <h2>target margin, 11/12 jury-permits, and open-source licensure</h2>
          "supply side leads to less taxes," by corporate-profits (corporations
          pay twice)? free market in reality is finite producers and demand
          isn't exclusively labor as to even be the most infinite it can be
          <h2>sewage police lawsuits, free rider immutables</h2>
          bail instead of keeping them in jail? Ins't that racketeering? Do
          donors get their money back? Bonds compount third party beneficiary
          laundered, not 40-50% fed-state debt spending && 10-40%
          debt-servicing, alone
          <br />
          <br />
          "supply definitely reacts to demand, so inflation shouldn't happen
          from population"
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/NBTw_p-WChI"
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="right"
            title="https://www.youtube.com/watch?v=NBTw_p-WChI"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          wall st is a central planner 60/40 gov new debt 40-50% fed-state
          debt-spending new debt $8/day/person, repossession after
          laundering-loitering-borrower's consumers/employers bid
          <br />
          <br />
          Small company stocks aren’t new business over exporting and
          complacent, non-labor demand David Banson, author of No Free Lunch:
          “Generated great balance sheets, themselves,” is appraised assets on
          book 44x, but 1x beyond that already written up Job killer;inflation
          filler (busy-work/share-solidarity)
          <h2>
            Supply & demand is productivity by propensity to work as surrogated
            in propensity to spend in equity outlaid, not withheld, falsly-bid
            nor accrued-interest by time, on a price vertical-plane
          </h2>
          <Cable
            style={{ width: "100%", height: "560px" }}
            onError={handleScollImgError}
            src={
              this.state.nofred
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=JdUH&width=670&height=475`
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=JdUH"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Sen Dan Sullivan: "Build the future of tomorrow on the backs of the
          hardworking Americans today,” GOP desires to find the arc of the
          covenant, a perpetual profit machine with free operating costs Jobs
          using american abundance, exporting gas gets their durable goods as
          public park deeds (currency, concurrentable-units or unit)
          <br />
          <br />
          Jo pinion compares Kyle self defense to attempt at the same, but&nbsp;
          <a href="https://humanharvest.info">self-defense</a>&nbsp;isn’t
          garnered by&nbsp;
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            mRNA-sporing-grafts
          </a>
          , net loss bonds profit, with illegal but precedential standing, to
          boot
          <br />
          <br />
          cases vs asymptomatic testing is the fallacy, speaking as an
          econometrist, though Durr qualified himself as a truck driver
          <br />
          <br />
          GOP and Dems are paranoid, still calling&nbsp;
          <a href="https://humanharvest.info">-700k excess deaths expected</a>
          &nbsp;a pandemic, thinks virus inseminates cell instead of comes out,
          by cartoon vivo
          <br />
          <br />
          <Cable
            style={{ padding: "10px" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1iYPZZJ7XqxmCmWO0kmQ9KNtMsK7iT81z/preview"
            }
            float="right"
            title="Newsmax 12 noon est - Wisconsin's 'Childrens' Hospital' rep"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Obfuscating mental health with HUD/wall st 40/60 gentrification &
          rent-seeking
          <br />
          <br />
          Communism is the bastardization. Of the 1/12 crazy person on a
          convicting jury, as to revolt against the time-series of individual
          labor equity (public parks, durable-goods/ham) savings, in tort, as
          capitalism always corrupts itself. Marx would end there. I suspect it
          is because the Wealth of Nations by Adam Smith's assumption of
          infinite-producers was not taken seriously enough, like&nbsp;
          <a href="https://open.spotify.com/episode/4MpKkdFR4jD33UX6xO2Lb3?si=_CAckkZCSjWuBd1V863Jdg">
            emulating randmomness
          </a>
          &nbsp;in Statistics... Voluntary is best exogenous basis rate fix, and
          cohort size is integral to age-standardization
          <br />
          <br />
          You can use reasoning without jury as defense, not prosecution
          <br />
          “Burden is on the state” “Duty to deliberate, and find facts about the
          case, the law is the slaw, be it comparative/natural over
          illegal-precedence and countervailing-law class precedence malfeasance
          of bifurcated law-licensing-board”
          <br />
          "fair minded and impartial juror seeking the truth," get kicked off
          for amortizing false bid pool third party beneficiary
          <br />
          "y'all saw his pain, right?"
          <br />
          <br />
          Uspto international has less propensity for broadness
          <h2>
            bancruptcy wishes to credit cycle, marx was first to critique the
            mises, "business cycle," or maybe another word for shmita, except
            they keep down payments and reposess, not cancel. bottom-left
            SaverParty.xyz wishes to amortize, not bailout.&nbsp;
            <a href="https://www.federalreservehistory.org/essays/glass-steagall-act#:~:text=The%20Glass%2DSteagall%20Act%20effectively,Roosevelt%20in%20June%201933.">
              don't obama my bernie
            </a>
          </h2>
          "what is so hard about calling yourself a capitalist?" probably the
          infinite producer assumption, and racketeering counterfeit in
          contract, down payments kept upon recollateralization
          <br />
          <h2>productivity isn't gdp/p, it is price-deflation over hours</h2>
          <br />
          <Cable
            style={{ padding: "10px" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1KdzgLEjyCUfO8SJuuC5aqGxDDH4rihF2/preview"
            }
            float="left"
            title="Tom Basile - 100k americans died from oxy april, 2020-21"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          A lethal dose for every living American it is so small and used in
          extreme pain-reduction cases, 100k == missing children. Both issues
          can be fixed with&nbsp;
          <a href="https://teapharmacy.party">open-source-licensure</a>, no
          false-bid-pools &&nbsp;
          <a href="https://thumbprint.us/phone">convict intranet</a>
          <br />
          <br />
          I am literally better than all of the lawyers
          <br />
          class precendece malfeasance
          <br />
          “It’s gotta be the 40% who stand up, not me.” THEN WHY ARE YOU ON
          INSTEAD OF ME? Bitch
          <br />
          Fucking eldercare in casting more like, on the Tom Bastile show
          <br />
          <a href="https://www.ftc.gov/sites/default/files/documents/statutes/credit-card-accountability-responsibility-and-disclosure-act-2009-credit-card-act/credit-card-pub-l-111-24_0.pdf#page=21">
            73% 50+ pro-AARP
          </a>
          <h2>
            oh look,&nbsp;
            <a href="https://www.americanbar.org/groups/litigation/committees/commercial-business/boilerplate-contracts/third-party-contract-beneficiaries/">
              racketeering tortious-claim
            </a>
            &nbsp;what would be truncated sales tax flat flat tax would pay for
            free rider immutable sewage police
            (non-bond-net-loss-profit-per-incarceration-10-40%-laundering,
            40-50% spending not trading)&nbsp;&nbsp;
            <a href="https://wavv.art">LAWSUITS</a>
          </h2>
          outlay corporate profit today! tax for consumer free rider immutable
          immediate escrow concurrentable units or unit collective-bargaining
          (not insurance belaying deductible for premium and
          producer-work-deficit), and tort&nbsp;
          <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/dealings-competitors/price-fixing">
            appraisals
          </a>
          &nbsp;of third party beneficiary
          <br />
          <h2>free rider mutable tax and 40-50% debt spend</h2>
          "Most people use it to pay wall st, what do you think they do with
          their money?" Grover Nordquist
          <br />
          <h2>google.com/search?q=how+to+apply+for+local+reporter+12k</h2>
          new business{" > "}existing business
          <br />
          1/12 upon conviction is only crazy, lest dent in head or hate
          indiscriminate
          <br />
          501 IP to government laundered,&nbsp;
          <a href="https://saverparty.xyz">socialism</a>&nbsp;is
          anti-rent-seeking dead-weight-label indiscriminate.
          <h2>
            Government/wall st 40/60 gentrification, rent-seeking,
            trust-building, competing-with-consumers, prohibiting
            price-inelasticity of bid-to-ask and prohibiting trade:
          </h2>
          "Ports, broadband, bridge-traffic-tolls," while we have the technology
          njta STILL services nearly 40% of revenue on debt, and they
          financially-"invest" in outlays that they have nothing to do with on
          asset-tangible
          <br />
          <h2>
            childcare/industry-vocational loss of durable-good/service when you
            don't merely target margin networks and finite producers for
            micreconomic reasons
          </h2>
          public insurance doesn’t do anything differently than private. We need
          to ban these&nbsp;
          <a href="https://youtu.be/aJEszZK54dw">false bid pools</a>&nbsp;and
          the invoices they abet on third party beneficiary grounds
          <br />
          <h2>
            'growth brings profits into the american peiple, i mean the emerican
            government'- Russ on CBO from Center for Renewing america.
          </h2>
          'Economic winners' or price deflation over hours? The latter if tech
          advancement is espoused by price deflation. Otherwise those “economic
          winners,” are more like, “busy work.” 'Inflation will be worse,'
          unless we amortize & alternative finance to max profit royalty, for
          lender/landlord work deficit can solve the working age supply chain
          issue
          <h2>
            self-defensive-threats, when third party beneficiary law is
            malfeasant
          </h2>
          <h2>
            <a href="https://carducci.us">amortize, don't</a>&nbsp;cancel nor
            keep down payments upon repo, ppp trust-building && laundering
          </h2>
          lower profits by not-trust-building but actual margin-targeting would
          emulate supply and demand would increase labor, being
          hours/propensity-to-work
          <br />
          "subsidies for everyone, at least," a person on Larry Kudlow's show
          pleads
          <br />
          we need to make an amendment to make it better for corporations to be
          domesticated,"
          <br />
          <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
            like slavery
          </a>
          , nationalism/technological-advancement-by-pareto-efficiency without
          dead-weight-rentier nor corporate-profits withheld by
          oligolopies/(self-employed), public companies pay twice corporation
          tax for government-beyond article-4 into free-rider-mutable tax &
          40-50% fed-state debt-spend, 10-40% bond-laundering debt-service,
          rent-seeking to go public, to boot, is retarded.
          <br />
          <br />
          <Cable
            style={{ width: "100%", height: "560px" }}
            onError={handleScollImgError}
            src={
              this.state.nofred
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=HzlI&width=670&height=475`
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=HzlI"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          this is why non-experts shouldn't espouse conclusions of experts
          without understanding their assumptions
          <h2>
            price deflation over hours, jury-permitting trumps bending over for
            the finite producer right.
          </h2>
          {!isNaN(this.state.width) && (
            <GDP width={Math.min(600, this.state.width)} />
          )}
          The right & top thinks DeSantis is good for bypassing jury-rules for
          permitting duress within minimal viable production and voluntary
          trade, and that testing bybyproduct asymptomatically determines cause,
          with insignificant aggregate deaths/population. You are loitering as a
          borrower, and working for a corporation is a net loss of individual
          profits. I own the market thru copyright, your market commune owns all
          the work you've done. Selling out of durable-goods/services is
          additive to gdp, which is retarded.
          <Cable
            style={{ width: "100%", height: "560px" }}
            onError={handleScollImgError}
            src={
              this.state.nofred
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=Gkvt&width=670&height=475`
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=Gkvt"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          We gotta wrap it up rollup nomenclature software development knows
          more academic, politics, reason, law, the edge of flat earth
          <div>
            <h1>FREE RIDER MUTABLE NATION</h1>
            <h2>
              sewage police lawsuits, collective bargaining immediate-escrow
              units-conccurrentable, not false bid pools of hidden premiums when
              40-50% debt-spending fed-state... 10-40% fed-state
              bond-laundering(debt-spending). apples to oranges competes too =
              subsidies for&nbsp;
              <a href="https://magnate.company">charging-stations</a>.
              consumer-surrogate rent-seeken broadband/tolls with
              privately-target-margin instead of gov-gentrification, in all its
              ways in housing, healthcare...
            </h2>
          </div>
          Retard belie forlorn becoming tarded self harm, afro-tool,
          discrimination for these words is really Douchey
          <br />
          <br />
          “Know how to get rich quick,” belies Rudy referring to down payment
          repossession upon repossession as integrally-derivative-rate-of-change
          for third party beneficiary as false bid pools and implausible
          landlord use
          <br />
          <br />
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://www.dropbox.com/s/5jmlz813kivmxc3/Rogan%20better%20angels%20finite%20producers.MP4?raw=1"
            }
            float="right"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          A freelancer for msnbc for blowing red light is irrelevant, and is as
          much onus derived from a contractor estimate with changing
          intermediate demand
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1ys9b82WhTKYaQGzV-h_UH3CwoN8B96gL/preview"
            }
            float="left"
            title="Peter 'virus is alive' Morcini"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Monpoly is the reason for inflation, not exclusively money printing
          (share-split), as with working age and lender work deficit for being
          untowards price deflation over hours (DRIP)
          <br />
          <br />
          I took it doesn’t because it was an offensive-threat, but because
          others thought it was
          <br />
          <br />
          gift cards illegal to expire? I think so. ftc says it is state issue
          now, ftc says
          <br />
          <br />
          enslaving generations of people by wall st/gov 60/40 wealth inequality
          by third party beneficiary lender-work-deficit
          <br />
          <br />
          the most engaging comes about by algorithmic censorship? no... the
          most contrived
          <br />
          <br />
          rent-seeking operational-costs, public & private
          <br />
          Selling out on&nbsp;
          <a href="https://open.spotify.com/track/1nyWxVfSonPbt7pTCrPbah?si=c967f067d0d4472a">
            perpetual
          </a>
          &nbsp;durable motion good&nbsp;
          <a href="https://magnate.company">machine</a>&nbsp;for services and
          hamburgers
          <iframe
            style={{ width: "100%", height: "400px" }}
            src="https://www.youtube.com/embed/10kjUOVqk7o"
            title="YouTube video player"
          />
          <h1>
            Amortize, don't cancel nor bailout, then&nbsp;
            <a href="https://carducci.us">truncate sales tax 2025</a>&nbsp;
            against menendez
          </h1>
          Accrual and premiums over monthly savings is retarded, not savings
          <Cable
            style={{ width: "100%", height: "330px", maxHeight: "35vw" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1aLHSTZdvS5Jw47YOsRz1WaG1j0Sr3COQ/preview"
            }
            float={null}
            title="Outlays to debt 40% revenue 60%, not tax-payer"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <a href="https://ballotpedia.org/New_Jersey_state_budget_and_finances">
            stop saying tax payer funded
          </a>
          , bitch, that is my money, drop dead
          <br />
          <br />
          Brian Kilmeade says that kids don't want to work after school anymore:
          <Cable
            style={{ width: "100%", height: "560px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nofred
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=670&height=475`
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=H5XB"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/TjvqmfDvOfQ"
            }
            float="right"
            title="https://fb.watch/9ruq5dxR9r/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ width: "100%", height: "560px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nofred
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=FSwQ&width=670&height=475`
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=FSwQ"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1Lg5X9aSV-1yqm_sfMQnfqmKp8K4iIRql/preview"
            }
            float="right"
            title="539 tries to talk about polling with Mr. Random himself, then"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            inflation isn't known how long it will take for wages to increase
            intermediate hamburger-service/perpetual-motion-machine
            collectively-bargained public park
          </h2>
          non-voters have plural majority and simple when without ideological
          duress of wall st pharma cop v wall st pharma cop instead of 11/12
          determination of desistation, permittance of duress within minimal
          viable product or conviction, lest payment with comment for
          discrimination, lest reciprocation of discriminateds' products,
          therfore a "nuclear-dilemma"
          <br />
          <br />
          <Cable
            style={{ height: "500px" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1SYZjIEl2SHmFlA7J5X4G-xMb2_t9yfa-/preview"
            }
            float="left"
            title="National Report slanders socialism AGAIN"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h1>
            Marxism, introduced by the, "[application of infinite producers by
            labor outlaid profits without delay]," in Schumpeter
          </h1>
          <a href="https://carducci.sh">We want jury-permits</a>, not infinite
          producer reasoning what duress is requited by a minimal viable product
          <br />
          We just want to amortize, nor cancel, bailout, nor keep this credit
          cycle of keeping down payments upon reposession, beyond third party
          beneficiary law and comparative/natural law reasoning that which to
          each their own, without aggression, financially to compete with
          consumers like implausible landlord use and false bid pool brokering
          in insurance "collective bargaining" fraud loitering on the real
          demand
          <br />
          “Non-scientific, randomly enforced,” Cheryl Chumley slanders socialism
          <br />
          <br />
          <span role="img" aria-label="bottom-left">
            ↙️
          </span>
          Output production of price-deflation per hour is of propensity to
          their own hourly efforts
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1F3kU7lqYR2Nqvv_X_wsVYMTOICoXM33X/preview"
            }
            float="left"
            title="The open-carry-without-luggage right in Wisconsin slanders Marx as an arsonist"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            voluntary is more random than emulated, as we should for
            finite-producers, comparative law over class precedence malfeasance,
            jury-permits/target-margin, consumer-surrogates
          </h2>
          <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm">
            Where does Marx say he wants to burn things
          </a>
          ? margins outlaid immediately
          <br />
          what are you talking about?&nbsp;
          <a href="https://monthlyreview.org/2020/07/01/marx-and-slavery/#:~:text=It%20is%20worth%20noting">
            He is talking about the credit cycle
          </a>
          &nbsp;(down payments kept upon foreclosure)
          <br />
          defense of livelihood of fractional reserve in contract,
          false-savings-bid-expiring-pool is not “Political violence, to use
          your platform to depict violence depleting the credibility of this
          body,”
          <br />
          <br />
          no surrender = claim as much time as i can consume implausible use
          impossible settlement intentful
          <br />
          <br />
          Socialists’ dream, “tax increases for small businesses,” a socialists
          dream would be to outlay
          <br />
          <a href="https://fred.stlouisfed.org/graph/?graph_id=961160&rn=793">
            Home sale price changes Percent of new debt
          </a>
          <br />
          <a href="https://fred.stlouisfed.org/graph/?g=C6m9">
            Debt percent of gdp
          </a>
          <br />
          <a href="https://fred.stlouisfed.org/graph/?g=G8nU">
            Debt share of mortgages and federal debt
          </a>
          <br />
          expiring-insurance, third-party-beneficiary malfeasance,
          raffle-licensing-monopsony incite violence
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <TwitterTweetEmbed
              style={{
                float: "left"
              }}
              key="1421471623136358405"
              tweetId="1421471623136358405"
            />
          </div>
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1k1Q7mfwZ96mzffl7YcEHuzwP-39l3wjg/preview"
            }
            float="right"
            title="nextdoor.com - 54%/38% n = 13, (8%=1)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          If electric-cars are feasbile, there is no reason for illiquidity.
          They had earlier denied my call for the rental-income problem solved
          by "pillar of Saver Party, to cap rent at quantity, not price." After
          I had presented the idea here on WABC, but before this nextdoor.com
          poll
          <span>
            release the antibiotics (open-source, cash-tuition without
            non-consumer money, rental-units)
          </span>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1FSwqDP5OcRPA2G0WY5aDiK6OnrI4kujm/preview"
            }
            float="left"
            title="Brian Kilmeade portrait"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “There are people concerned about Quran placement in Gitmo but no
          blowback for organ harvesting by China?”
          <br />
          <br />
          "dealing with car repairs seems like a lose-lose situation, that's why
          you need Carsheild "plans," expiring-insurance is a net-harm... claims
          bargained for with middle-man-insurance that cannot be withdrwawaln at
          once is already illegal per the surrendering of your consumers' money
          with the false pooled bid - to which finite producers cannot compete
          as to regulate themselves into productive-output (price-deflation per
          hour) efficiency
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1MEOHPu0i7lFCB2DWGwZRZ87SErCXp5Dn/preview"
            }
            float="right"
            title="National Report - Housing market fluctuations with bob-sellers"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Slowing of the housing-cycle,” says Bob sellers about foreclosures and
          the mopping of down payments, amortize, don't cancel nor bailout.
          timelesspaydayroyalty scoped for industry-type in p2p for
          non-concurrentable&nbsp;
          <a href="https://vaults.biz">
            max-profit-royalty schedule for outlays upon withdrawal or sale
          </a>
          , keep investment bank collective bargaining in warehousing equity or
          fully-funding a collective-bargain without credit
          <br />
          <br />
          void ab initio, duress beyond mvp{/**tom king attorney amistad */}
          <br />
          incarceration net loss profit by bonds, regulate (open-source) don't
          racketeer (compete-with-consumers) means jailtime
          <Cable
            style={{
              height: "300px"
            }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1JPM1NiA4osQ17-H-TUV7FsHIVTGjAd9a/preview"
            }
            float="left"
            title="Occupy Democrats - take my treatment before jury-verdict of 11/12 without prejudice of expertise"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>expertise breed complacency and savefacing</h2>
          <Cable
            style={{
              height: "500px"
            }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1szNRKdYpOQOtQMVDeleUVbai0pAxPo2E/preview"
            }
            float="right"
            title="Bernie and Sid - infinite producers, accounting and jury, bona fide and inclusive"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          licensure to 50-50 raffle and&nbsp;
          <a href="https://truncatedsalestax.com">have advice be taken from</a>
          &nbsp;is rent-seeking, like
          fda-craft-beer/nih-r&d-monopsony/doe-trade-secrets/hung-jury-permits
          <br />
          We only benefit from charity when we are going to buy those turkies
          with that money anyway. Price elasticity is 1. Right?!
          <span
            role="img"
            aria-label="side-splitting-laughter hear-no-evil old-man"
          >
            🤣🙉👨🏻‍🦳
          </span>
          <h2>
            work off from "seller, loiter on collateral; gdp=debt/down==11/1,
            only expiring-insurance pool bid fraud can afford advertising
          </h2>
          <br />
          The corporate tax from matching turkeys actually taxes from consumers,
          if the shareholders are outlaid to join demand without withholdings,
          public nor private market-communes
          <br />
          <br />
          He doesn’t give up right to self defense because he was there. Do not
          mix laws or double jeopardy by countervailing laws (and therefore
          abject racketeering class precedence of the law-licensing-board, akin
          to fad craft-beer malintent reasons to close-source trade secrets in
          trust-building and competing with consumer educational institutions,
          public or private, in labor-dead-weight without exclusive demand
          autonomy, 60/40 being wall st/gov 40% debt spending $3k/year/person,
          10-40% bond laundering, debt-service, in fed-state, respectively
          <br />
          <br />
          duress isn't voluntary, random isn't when emulated, but voluntary
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1JJmqGwKcojFamC_-Io5M11HFzsanf_LJ/preview"
            }
            float="right"
            title="Tucker Carlson fam"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h1>politics between reason and law</h1>
          “‘I’m going to kill you if you enforce the illegal-law,’ might makes
          right is why civilization exists,” Tucker Carlson talking about
          reasons to jail without naturtal crime to Brian Kilmeade. Minnesota is
          guilty, comparative natural law means we must now carface Jamie Dimon
          for livlihood counterfeit in contract, pharma-monopsony and
          malfeasant-/countervailing-justice-and-precedence, open-carry without
          luggage is guilty, licensing without open-source is guilty, barriers
          to entry is guilty. register the gun, don't jail or fine when you come
          up against a detractor to your gerontocracy. "
          <a href="https://truncatedsalestax.com">
            when kyle took out this mental-patient
          </a>
          ," who 'raped 3 children' but served their time? nj says you are
          mental-patient if you are homeless after 10x hours and half unemployed
          to working age cohort size since 1970, then they lie about you saying
          you kick and punch after trying to elope after presenting you with a
          siringe, after going in for a knee problem, then believing my mother
          who just wanted me out of the house without evidence, 13 days, after
          being called bizarre for calling the diagnosing doctor's income a
          false pooled bid of expiring-insurance, while Paul Krugman runs free.
          Ask a murderer why they did it, it is never insanity. only 1/12 jury
          conviction is legally-crazy, until you have brainscan.info
          malformity-correlations. I own copyright, you retards are working
          against $8/day/person new debt. Cocaine and Weed is a performance
          enhancer, but pain-medication and antibiotics are currency-competition
          to the public-park dilution that is dollar-park-shares of 20% us fed
          lands
          <Cable
            style={{
              height: "500px"
            }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1gQ6YJf6orTjfFQrL23l-AdhrYdSxce-v/preview"
            }
            float="left"
            title="National Report - GOP budget guy"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            price-deflation per hours is sufficed by immigration or ending wall
            st, being 60% of debt-spending, which certainly IS price-elastic &
            -inelastic of bid-to-ask
          </h2>
          <h2>poorness=(poverty/equality)</h2>, best friends
          <h2>propensity of output</h2>, expiring-insurance collective
          bargaining oxymoron, false, fallacy
          <br />
          <br />
          excess deaths CAN be-standardized for cohort sizes to assign
          significance!" epiologists
          <br />
          <br />
          <b>
            Saver Party 202X, truncated sales tax, a flat tax's flat tax, free
            rider immutable sewage police lawsuits
          </b>
          : It is literally insignificant except for 20%x more than normal fed
          spending/yr free rider mutables, 40% debt spending, 10% debt service,
          .8$ debt for fed spend dollar-public-park (without share-split-accrual
          a.k.a. “strings), 1/4 pentagon, 1/14 pension, 1/4 premiums for
          monthly-savings, accosting the supply chain. Why not immigration
          working-age to sold your delirious supply-chain problem when c1970
          half-life .5x unemployed to population, 10x price/hours more hours for
          median home
          <TwitterTweetEmbed
            key="1434606169516032012"
            tweetId="1434606169516032012"
          />
          <a href="https://saverparty.xyz">#ThirdPartyBeneficiary</a>
          <br />
          <b>#CreditCounterfeitLaundering</b>&nbsp;#ReverseM2, #GreenNewDeal
          <br />
          <b>#FreeRiderMutables</b>&nbsp;Involuntary-servitude,
          #GovernmentGentrification, #SocialismIsParetoEfficient,
          #FiniteProducers, #RepublicansAreCommunists, #LibertariansAreGimps,
          #ConsortiumCommunism, #LocaleDepositaries, #DebtlessEconomy,
          #ZeroSpendingEconomy, #TradeNotSpending,
          #ReimburseDownPaymentsDuringBankruptcy, #DepositIsntAnOption,
          #BondVigilantes
          <br />
          <TwitterTweetEmbed
            key="1434603553176309764"
            tweetId="1434603553176309764"
          />
          <b>#CompetingWithConsumers</b>{" "}
          #CONFLICTOFINTERESTS#UNION#COMPARATIVEADVANTAGE, #GAMETHEORY,
          ##RolloverInsurance, #PrisonersDilemma, #RolloverCollectiveBargaining,
          #UselessPriceInelasticity,&nbsp;
          <a href="https://vaults.biz">#MillennialIncomeDeficit</a>,
          #M2Laundering,
          #ConflictOfInterests:#AbjectFailure-#BonaFideIntent+#PromotedWill,
          #ClassPrecedenceMalfeasance
          <br />
          <TwitterTweetEmbed
            key="1434602186160414727"
            tweetId="1434602186160414727"
          />
          @SaverParty
          <b>#VaccinesAreRacist</b>&nbsp;Involuntary-servitude, duress beyond
          incontrovertable, absent of reasonable doubt, consensus proir to
          conviction, permitting, or ordering of desistation{" "}
          <a href="https://froth.app/stats">#BasisRateFallacy</a>, #Epiology,
          #NullHypothesis, "not, not is necessary but not necessarily
          sufficient", when the basis matches the outcome, you must deduce all
          other causes to extrapolate a law.
          <br />
          <b>#FundSewagePolice</b>&nbsp;hung-jury beyond minimal viable product?
          &nbsp;
          <a href="https://www.rutgers.edu/news/rutgers-led-national-survey-uncovers-doctors-misconceptions-about-nicotine-risks">
            1/3 doctors believe smoking cause birth-defects
          </a>
          <br />
          <TwitterTweetEmbed
            key="1430159596417699842"
            tweetId="1430159596417699842"
          />
          <br />
          <b>#TruncatedSalesTax</b>&nbsp;3% under $2k max $60 geohash-spoofable
          <br />
          <b>#ImplausibleLandlordUse</b>&nbsp;30 days or 5 units
          <br />
          <TwitterTweetEmbed
            key="1421471623136358405"
            tweetId="1421471623136358405"
          />
          <br />
          This can only be solved with non-social government (photo & criminal)
          identity&nbsp;
          <a href="https://nationalsecuritycasino.com">@DeptofDefense</a>
          <br />
          <br />
          I mean having a physical payment authorization, with certificates on
          commodity sdr & 44x1 shmita
          <br />
          <br />
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid rgb(100,200,255)",
              textAlign: "center"
            }}
          >
            {" "}
            44x cash, debt is now. Borrowers colluding with bankers, loitering
            on the assets and prohibiting their settled trade away from the
            youth - to which the youth are put into wageless labor at school,
            all paid by promising to each other what is not theirs. Now that
            this case is ...
            <br />
            <br />
            ... apparent, they will print unrequited to make up the difference
            <br />
            <br />
            <div
              style={{
                margin: "10px",
                borderRadius: "10px",
                border: "1px solid rgb(100,200,255)",
                textAlign: "center"
              }}
            >
              In the near future we will steward equity+royalty w/max-profit and
              reverse those purchases to all those affected by the manipulated
              least frugal supplier and demander by
              debt-counterfeit-in-contract-wagering monopsony of the consumer’s
              other marketable assets by prisoners’ dilemma duress coagulating
              and bloating demand beyond their willingness and ability in their
              individual propensity https://vaults.biz
            </div>
          </div>
          <br />
          Why work in cash when you can work to default on debt? Why is being
          driven to a mental health place once (was it not a hearing?) not
          congruent w only being able to commute once a month due to a
          jaggedly-torn vastus medialis that hasn’t healed as I was a bartender
          @SocialSecurity
          <br />
          <br />
          A bridge, a toll and a broadband network walk into
          free-rider-monopsony. @Apple Store is the bartender, & the header for
          webapps is the bootlegged-booze #infrastructure #InfrastructureBill
          #InfraWeek free-rider-immutables Police officer© sales-tax-geohash
          http://3under2.us @BrigadeAbe
          <br />
          <br />
          <TwitterTweetEmbed
            key="1434585366183522312"
            tweetId="1434585366183522312"
          />
          Margin target. Interesting how congruency is perpendicular for an
          exponential relationship. Hope http://mortality.org is ready for me to
          put life expectancy under death which could explain the season. Seems
          the medical community knew it would be a doozy @nih what u know? @who
          http://Humanharvest.info
          <br />
          <br />
          GDP is all m2, where does currencyComponentOfM1?
          <br />
          <br />A degree in economics taught at JHU is not factual, and medical
          papers are prone to act unlike the reasonable-doubt of “do-no-harm”
          <br />
          <br />
          Let alone are they interested in the wrong answer if it pays
          <br />
          <br />
          Or there is an improper treatment of doctors that abstain for this
          <br />
          <br />
          The government could have given $70k/yr to people every year with the
          amount of money they printed (red) and $3k promised (blue) but instead
          operated their trust-built monopsony
          https://fred.stlouisfed.org/graph/?g=D2jW
          <br />
          <br />
          peeky-blinders prior to conviction? I'll be using the deviceKeyBox
          &/or physicalKey w/ convicted homicides, rapes, counterfeits,
          racketeering & non-compliance @ftc loaded on a dashboard for police to
          interact w/ 1st-time cited plans of attack publicly forced onto
          @firebase
          https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c
          <br />
          <br />
          should a http://vau.money atm fee charge in such a way on
          http://scopes.cc employee-management-auth-cards? and
          http://thumbprint.us marketplace? I can only prohibit taking
          credit-counterfeit by using ACH for transfer & ATM for banking...
          http://vaults.biz
          <br />
          <br />
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "rgb(100,200,255)",
              textAlign: "center",
              padding: "4px 0px"
            }}
            onClick={() =>
              this.setState({ openMinnesota: !this.state.openMinnesota })
            }
          >
            The Government is liable: deadly force, accidental death, of
            integral instigation; or sting, undercover warrant, who called it
            in? lie of reasoning?
          </div>
          {this.state.openMinnesota && <br />}
          {this.state.openMinnesota && (
            <div
              style={{
                borderRadius: "3px",
                border: "1px solid rgb(100,200,255)"
              }}
            >
              prone-control is not use of force, but should be used as
              active-resisting. ok. but you have the address of Floyd right? let
              him go #MinnesotaIsGuilty #ChauvinTrial
              <br />
              <br />
              People on drugs might not understand, irratic-behavior, not feel
              pain, super-human, compliant-to-complete-non-compliance in a
              heartbeat
              <br />
              <br />
              Compliance, force, duress, intent to harm is not competing with
              customers or unequal law like '"lawful escalation" of an unequal
              punishment of infraction.' Do you like it
              <br />
              <br />
              Causes lymphoma; more significant than graft vs humoral response
              to D416G @CDCgov @NIH
              <br />
              <br />
              Free rider religion of self on civil rights act let alone
              exclusion @HealthNYGov @RutgersU @JohnsHopkins
              <br />
              <br />
              What proof is not due to mask humidity mold elongating gestation
              of virus without human cell and rather virus not going up to
              atmosphere or ceiling in condensation; can we have a study of
              countertop-talking? @JohnsHopkinsSPH
              <br />
              <br />
              Non-malignant lymphadenopathy is diagnosed by “history and
              physical examination” Unexplained Lymphadenopathy: Evaluation and
              Differential Diagnosis Lymphadenopathy is benign and self-limited
              in most patients. Etiologies include malignancy, infection, and
              autoimmune disorders, as well as medications and iatrogenic
              causes. The history and physical... aafp.org
              <br />
              <br />
              The mRNA grafts aren’t saving lives, deaths are exponentially
              correlated with age @fda https://aafp.org/afp/2002/1201/p2103.html
              you ran out of vulnerable old people, now the malignant
              over-production of b-cells will occur Lymphadenopathy and
              Malignancy The majority of patients presenting with peripheral
              lymphadenopathy have easily identifiable causes that are benign or
              self-limited. Among primary care patients presenting with
              lymphadenopathy, the... aafp.org
              <br />
              <br />
              “Wartime effort” is fraud like gold confiscation in 1932. @ftc
              @fcc @TheJusticeDept duress religion of self. Hesitancy is not
              your choice and you certainly cannot mislead
            </div>
          )}
          <br />
          “Don’t pay thousands in car bills,” where do you think you get the
          money?
          <br />
          <br />
          Lawful run of red-light, don't you have a snap of the license?
          <br />
          <br />
          You can't crash into them if they continue driving at the speed limit
          after knowingly running a red light
          <br />
          <br />
          Light to moderate pressure during handcuffs is policy? For
          counterfeit? Let me show credit history of US gov
          <br />
          <br />
          The police are guilty for positionary-aphyxia force in handcuffs may
          be a scapegoat... I want the original arrest for counterfeit, even
          knowingly, to be deemed illegal given the Minn Police operate on
          counterfeit as of now. Hope they realize what this solidifies for
          comparative rights in enforcing counterfeit if they can use
          low-to-moderate positionary-asphyxia force, not even possible with
          knee except with handcuffs...&nbsp;
          <a href="https://www.fletc.gov/sites/default/files/imported_files/training/programs/legal-division/downloads-articles-and-faqs/research-by-subject/4th-amendment/ConsenttoEnterorSearchbyDeception.pdf">
            malfeasance in foresight & monopsony-by-credit for their
            free-rider-immutable brandishing that keeps us all safe
          </a>
          ! ....
          <br />
          <br />
          Bloat prices for their input costs? Launder profits of their business
          to the bank? That isn’t owning a home! The creditor gets to repossess
          and keep community down payments
          <br />
          <br />
          Benefit/cost on what grounds? One person’s lifeline? Stop conflating
          vectors
          <br />
          <br />
          Many factors than cannot be added together in algebra/calculus, they
          are different units: blood clot loaned to Canada, they owe us the
          impossibly returned price-fixed at that price damages? This wouldn’t
          happen if a commodity sdr was lost in the utility of that single
          vector without cross-party-harm B-cell oncogenesis to boot, for a
          monoclonal antibody that is learned (where mRNA does/is not,
          taught-by-doing) over thousands of Antigens. What is the DNA structure
          you are testing for in the PCR cultures?
          <br />
          <br />
          "So let me get this straight: Pubs in Congress claim spending billions
          on F-35s creates jobs, but spending on rebuilding roads and bridges
          doesn't" - Robert Reich
          <br />
          <br />
          It takes jobs from others! You can use monopsony-margin-targeting and
          free-rider-mutability in tolls too. It doesn’t create jobs
          <br />
          <br />
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "rgb(100,200,255)",
              textAlign: "center",
              padding: "4px 0px"
            }}
            onClick={() => this.setState({ openChase: !this.state.openChase })}
          >
            Chase
          </div>
          {this.state.openChase && <br />}
          {this.state.openChase && (
            <div
              style={{
                borderRadius: "3px",
                border: "1px solid rgb(100,200,255)"
              }}
            >
              @ChaseSupport We are the official Twitter customer service team
              for Chase Bank! We are here to listen, learn and help M-F 7AM-11PM
              ET & Sat/Sun 10AM-7PM ET. 10.4K Following 135.9K Followers Joined
              March 2011 Quote Tweet Chase Support @ChaseSupport · Apr 11
              <br />
              <br />
              Replying to @SaverParty Hello. We see you mentioned us, and wanted
              to make sure you didn't need assistance. If you do, feel free to
              send us a DM. ^BW
              https://twitter.com/messages/compose?recipient_id=274789264 My
              name is Nicholas Carducci, I had drafted a longer message but must
              have swiped it off and am now too tired to rewrite my whole
              argument. I would surely like to get your intentions with there
              being $70k/yr new cash per person and $3k/yr new promises on that
              cash, per person. You obviously do not intend to get the return
              you take from the lot. (1) Is that not colonialism and therefore
              slavery, promising other peoples’ money to yourselves and
              therefore counterfeit? Please understand all purchases will be
              reversed to their cash:debt level, now 44:1 and any furtherance to
              bail out lenders by currencyComponentOfM1 residual split as not in
              accordance with normal shares, and the disparage is violation of
              Amendment 14, 13 the Sherman Act and many common law regarding
              consent. (2) Where does the currencyComponentOfM1 go? Sun 11:46 AM
              Hi! A specialist will help you as soon as possible. Do NOT send
              confidential info, such as SSN, credit card, or account numbers
              over social media. For account-related questions, please send your
              name, ZIP and details of your concern. Thanks for choosing Chase.
              Sun 11:46 AM
              <br />
              <br />
              This is duress and comparative law, not a choice I borrowed
              without the intention to pay it back, since everyone else
              impossibly was Sun 11:48 AM
              <br />
              <br />
              In the near future we will steward equity+royalty w/max-profit and
              reverse those purchases to all those affected by the manipulated
              least frugal supplier and demander by
              debt-counterfeit-in-contract-wagering monopsony of the consumer’s
              other marketable assets by prisoners’ dilemma duress coagulating
              and bloating demand beyond their willingness and ability in their
              individual propensity Sun 11:51 AM
              <br />
              <br />
              I will not be giving any future income back because the whole
              premise is illegal, only under a profit schedule of customers
              willing and ability without prisoner’s dilemma duress and under
              their own capacity is it legal for supply to gain from a person,
              to which http://vaults.biz shows the protocol how to be in
              compliance with US and International law Sun 11:58 AM
              <br />
              <br />
              I will be bringing this class action suit to reverse purchases (or
              income) to their cash:debt levels and not allow any
              accrual-promise or actual dollar split to recoup for your bad bet
              that you must know there is not enough money, unrequited and
              residually/fractionally, if I had the money. Please answer as to
              what your intentions are offering me to pay 25% of my borrowing.
              Duress is voidable as consent to I don’t understand if your
              strategy to just live it up with your collusion with government
              and never break even? Sun 12:05 PM
              <br />
              <br />
              To loiter with consumers’ marketable assets by way of the
              price-intervention of prisoners’ dilemma duress,
              counterfeit-promises and the duress to collude as a borrower on
              assets against savers therein and not ownership? Sun 12:09 PM
              <br />
              <br />
              Personal credit is not logically possible and royalty-w/max-profit
              will not be as generous of outstanding to book-asset value without
              the government malfeasance and outright monopsonic collusion
              beyond their free-rider-immutable abilities as to be legally
              compliant but to expand their purchases to not only while indebted
              but further split savers and keep the assets under the monopsony
              of the borrower. Sun 12:13 PM
              <br />
              <br />
              Collateralized-credit is like a deposit, not an option where the
              price is locked in. That means repossession comes with a return of
              the down-payments to the supply chain you monopsonized Time-based
              business credit is also a method to launder money before demand is
              really ready willing and able to of their own consent Please
              follow http://vaults.biz for my tech solution and consider the
              geohash protocol for sales tax software to pick up and ween off
              slavery For free-rider-immutable Gov services like their
              margin-targeting duty on networks and markets of ‘markets’
              <br />
            </div>
          )}
          <br />
          Lending, buying to rent with unsettled trade and unrequited-split is
          not help, it is cannibalism
          <br />
          <br />
          Why default or go to war? COVID-19 mRNA Vaccination-Induced
          Lymphadenopathy humanharvest.info
          <br />
          <br />
          Growth for @JoanHamburgShow is if people die and she has to share less
          <br />
          <br />
          Usually they find an excuse to print from “public credit” to private
          debts
          <br />
          <br />
          Business is the key to non-profit efficiency, as if profits are income
          over spending, of as discretionary-income are revenue over
          expenditures, and efficiency is investment (asset, profit-share
          accumulation, not lending or building with the intent to rent) over
          wages moldmask.co, cocaine is money, purity health dpt @SaverParty
          <br />
          <br />
          Investment must be channeled from willing, able and ready customers,
          free-rider-mutable market, immutable https://3under2.us
          <br />
          <br />
          <div>
            <a
              href="https://scopes.cc"
              style={{
                fontSize: "30px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "76px",
                backgroundColor: "#c39767ff",
                color: "white"
              }}
            >
              Scopebook
              <br />
              <span>scopes.cc accrual-zero</span>
            </a>
          </div>
          <br />
          Scott, Tax Foundation: "10% Union Workforce by Federal Discrimination"
          when unions are not just strikes
          <br />
          <br />
          Everyone is at commercial, but one has to be bullshiting for
          compliance at :20, :35 and :52
          <br /> <br />
          The point in which&nbsp;
          <a href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/">
            supply and demand meet
          </a>
          &nbsp;is the price in which the LEAST frugal, price-giving supplier
          meets the LEAST frugal, price taking demand, and thereby trades to
          paint the last trade valuation&nbsp;
          <a href="https://humanharvest.info">mirrorcode</a>
          <br /> <br />
          this is colonialism, this is counterfeit; cannibalism not dominance or
          profits/assets to institutions/labor
          <br />
          <br />
          government monopsony
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                minWidth: "120px",
                width: "25%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dropbox.com/s/9un3448wjl1dnip/IMG_3563.png?raw=1"
              />
            </div>
            <div
              style={{
                minWidth: "120px",
                width: "25%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dropbox.com/s/h03iyt7e8hxa19w/IMG_3562.png?raw=1"
              />
            </div>
            <div
              style={{
                minWidth: "120px",
                width: "25%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dropbox.com/s/esz6ke2xn7fs716/Markey1.png?raw=1"
              />
            </div>
            <div
              style={{
                minWidth: "120px",
                width: "25%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dropbox.com/s/xjhg8b1kcmwxpxz/Markey2.png?raw=1"
              />
            </div>
          </div>{" "}
          <br />
          <b style={{ color: "blue" }}>
            I’m a laborer and pre-rev inventor, I will be suing for damages and
            unequal law;
            <br />
            there are plenty of counts, Sherman Act, Amendment 14, 13,
            counterfeit-wagering prohibiting trade settlements...
          </b>
          <br />
          <br />
          We all have to make a living (read:cannibal), but we all don't have to
          produce by front-running and than dumber-fooling consumers. and these
          direct deposits are involuntary split that you get 9% of
          <br />
          <br />
          <div
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              border: "1px solid grey"
            }}
          >
            Harder for GA absentee & early-voting somehow from runoff... it
            makes it easier for most! we can use internet no more political
            parties
            <br />
            <br />
            80% infrastructure investment support, did you specify if by debt or
            tax? What is the n size? @PressSec
            <br />
            <br />
            “Competitive-bidding process” is abjectly untrue to describe your
            monopsony proposal. You can force network companies to pay because
            they are a market-of-markets
            <br />
            <br />
            If you are to act in between a consumer-subcontractor, as
            contractor, you should be flipping-assets or pro-rated-for-escrow-on
            @scopeboo http://scopes.cc labor/material
            auto-unlock-per-sprint-payment
            <br />
            <br />
            Jen Psaki about to admit her preferential treatment of “American
            workers and our economy” over savers and labor @PressSec
            <br />
            <br />
            Do not volunteer Cowards Starve - Protomartyr open.spotify.com
            <br />
            <br />
            Extending the deadline was not in the consumer credit contract, Jen.
            You lose moldmask.co, cocaine is money, purity health dpt
            <br />
            <br />
            I obey if I am sick, but get the “vaccine”/graft to please you @cnn
            won’t even say your doctor’s name @BrookeBaldwin
            <br />
            <br />
            You can see how good #cocaine is by looking at these three charts,
            you don't need a @MoodysInvSvc rating or @GeraldoRivera report
            https://drugabuse.gov/publications/teaching-addiction-science/brain-actions-cocaine-opioids-marijuana
            #Marijuanastocks
            <br />
            <br />
            https://ncbi.nlm.nih.gov/pmc/articles/PMC3165962/ #MinnesotaIsGuilty
            #ChauvinTrial #cocaina #cocainewhite
            <br />
            <br />
            Meth x fetanol = Hypoxaemia, oxygen deficiency [relative-to carbon
            dioxide. no narcan when no cardio Dr. Bradford Langford (called:
            "non-responsive, no-pulse on-arrival")
            https://pubmed.ncbi.nlm.nih.gov/23636734/ Ph low during cardiac
            arrest, no blood flow
            https://ncbi.nlm.nih.gov/pmc/articles/PMC3208791/ striatal hypoxia
            The effects of opioids on the lung - PubMed The term opioid refers
            to a broad class of medications that are used most frequently for
            their analgesic effects. Along with this effect, they also produce
            euphoria, and it is for this reason that... pubmed.ncbi.nlm.nih.gov
            <br />
            <br />
            (oxygen) to tissues: pi, lactate Co2, high, uh, varies, blood/gas
            not cause of one offer the other in edi arrest. High co2 suggest
            respiratory cause by drug, suffocation or both
            https://erj.ersjournals.com/content/44/4/1023 reports of
            in-conjunction for po-po: top of citations are tenants; its slavery
            Gas exchange and ventilation–perfusion relationships in the lung A
            review of ventilation–perfusion relationships and gas exchange,
            basic concepts and their relation to clinical cases
            http://ow.ly/wMUwq erj.ersjournals.com
            <br />
            <br />
            If the @ftc can make it the liability of the merchant for fault of
            disbursements prior to notification, their application of
            residual-split ('86-benefits) is as well @ssa your onus is to ensure
            that I am who I say I am regardless of how you don't
            regen-private-keys or photo-ID
            <br />
            <br />
            What is the difference between an unsettled-obligation &&
            prisoners’-dilemma-duress and slavery?
            <br />
            <br />
            Only pay for what you need. An abject lie @LibertyMutual unless you
            are admitting to intending to harm by subjecting Demand to
            cross-party-bloat && price-variable-gift-cards @77WABCradio
            <br />
            <br />
            What is the difference between an unsettled-obligation &&
            prisoners’-dilemma-duress and slavery?
            <br />
            <br />
            But a Constitution of Government once changed from Freedom, can
            never be restored. Liberty, once lost, is lost forever.
            <br />
            <br />
            Somebody report me! Donald already incriminated for nothing
            <br />
            <br />
            Chris Hahn @ChristopherHahn It’s a tantrum not a boycott.
            <br />
            <br />
            The Former Guy will never be welcome at Yankee Stadium or anywhere
            else in New York.
            <br />
            <br />
            Replying to @ChristopherHahn Push him out to sea
            <br />
            <br />
            I had a word with lit- prefix that really narrowed it down but then
            a guy on the radio said DUI of weed or cocaine makes sense
            <br />
            <br />
            Producers say to rentier you are not one of us, we compete with
            eachother for customers, we don’t take the land or air above it to
            not use it or flip and settle or supply is not practically
            constrained to charge rent (if copyright is not too broad, but
            well-managed...)
            <br />
            <br />
            Invoices are theft Max five rent 3 under 2 Reverse purchases to
            cash:debt
            <br />
            <br />
            Colluding to make prices higher with father time && the intent to
            harm (not use) are what make rent illegal
            <br />
            <br />
            This is not a subscription to a service that doesn’t harm others (if
            non-compete monopsony, the subscription does harm with involuntary
            trade)
            <br />
            <br />A competable-subscription service is not
            bloating-demand-with-prisoners-dilemma or
            assigning-impossible-usurped-unrequited-invoices
          </div>
          <br />
          Cases are rising, deaths are less lethal because the vulnerable are
          already dead and there are testing what already existed since 1900
          cold make same antibodies but only work if robotic platform
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <div style={{ backgroundColor: "rgb(200,220,255)" }}>
            "5 Bipartisan Covid Relief Plans, no Covid Health Spending which
            would be to help small businesses and family workers," 9%. Ben
            Furgeson says 9% "Goes to you." You guys suck! Not liable for the
            products you advertise, huh, M. levin
            <br />
            <br />
            Liberty Mutual: "You only pay for what you need." &nbsp;
            <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
              YOU DONT NEED IT
            </a>
            . &nbsp;
            <a href="https://nmlsconsumeraccess.org/">Consumer Access</a>
            &nbsp;costs access, by its being to greater effect AND absolutely of
            relative savings...&nbsp;
            <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
              doing it is a waste of time and equityutilitymoney
            </a>
            <br />
            <br />
            “Special financial assistance,” would be to help negotiate original
            principle without credit found market marginal utility:cost price,
            not favor the lender or overreaching landlord
            <br />
            <br />
            The key to world peace is no finance. Not mental health services by
            the hand of state sanctioned, paid, conflictedly-interested experts
            <br />
            <br />
            "Help is on the way with your finances" - Wold Blitzer
            <br />
            you are taking equitymoney, splitting it as you would corporate
            shares, and giving them back less and of increased demand capacity
            for price:utility (no reason, not help, only helps the ask to get
            more&nbsp;
            <a href="https://foiegras.life">for the same thing</a>)
            <br />
            <a href="https://open.spotify.com/track/0KeDuUqEX3P0cKzRD5pEom?si=i8hSI_NeQtuCwpt9x34p6w">
              not taking credit
            </a>
            , striving to work for market(copyright, not{" "}
            <a href="https://vaults.biz">depositary</a>) share instead of
            entrapping myself into <a href="https://stripe.com">Stripe.com</a>
            <br />
            <br />
            Judges cannot judge what is right for bail, they'rn't impartial - as
            in they get the bail.
            <br />
            Bail for judges'n't for consumers/
            <a href="https://wavv.art/United_States_of_America">community</a>
            &nbsp;- the service at its most efficient as to keep everyone
            happiest, individually, for the complainants only; class action is
            for precedence, but we all assume it gets less than each individual
            case would.
            <br />
            <br />
            Allpoint and Greendot (Shazam/Gallileo/Dwolla&nbsp;
            <a href="https://nationalsecuritycasino.com">only US</a>) oligopoly
            prevents me from extending payable services because it requires me
            to take counterfeit offers with cross-party down-payment
            malfeasant-jurisprudence risk in requiring that I accept credit to
            accept debit, and banks that cost $10/mo instead of ATM networks
            <br />
            <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
              CountyReimbursementsAcrossTheCountry
            </a>
            , that's my equitymoney, dike
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "40%",
                  position: "relative"
                }}
              >
                <img
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  src="https://www.dropbox.com/s/alxtqu19s764stl/CountyReimbursements.jpeg?raw=1"
                />
              </div>{" "}
              <div
                style={{
                  width: "40%",
                  position: "relative"
                }}
              >
                <img
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  src="https://www.dropbox.com/s/nnv1d4217tjix7b/IMG_0318.jpeg?raw=1"
                />
              </div>
            </div>
            <br />
            This fat talks about equity and then says thanks to Biden for
            providing funds. Funding doesn't help, it only monopsonizes above
            the ask. Not only is it fraud by PCR antibody the "
            <a href="https://humanharvest.info">gold</a>&nbsp;standard" but
            false positive as is for cold's response, the policy was forced upon
            us in 1937
            <br />
            <br />
            Border Patrol agents are saying 50-100% have wristbands to show how
            much pootang they owe the cartels on the way up. &nbsp;
            <a href="https://en.wikipedia.org/wiki/Janet_Yellen">
              STOP THE SPIGGETS
            </a>
            <br />
            <br />
            <br />
            What is with the media today reminding us that the vaccine has
            already been approved and the bills are finalized? We could take all
            your money and give it to Greta Thunberg The only path forward is
            the Efficiency Act and debt:cash reconciliation for all purchases to
            which the LEAST frugal price-giving ask and price-taking person
            found price*output(or individual-efficiency, comparative-advantage
            productivity)
            <br />
            <br />
            STOP ASKING FOR CAPACITY WHEN YOU MEAN&nbsp;
            <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
              DEMAND CAPACITY
            </a>
            &nbsp;WHICH IS&nbsp;
            <a href="https://saverparty.xyz">
              PERFECTLY PRICE ELASTIC FOR ITS UTILITY PER EACH NEW CAPACITY
            </a>
            , WE NEED&nbsp;
            <a href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/">
              SUPPLY CAPACITY
            </a>
            &nbsp;OR VOLUNTEER OR LESS FRUGAL PRODUCERS, NOT STEAL BY
            COUNTERFEIT-IN-CONTRACT
            <br />
            <div
              style={{
                width: "40%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src="https://www.dropbox.com/s/fohi9a6fxtrch0q/NeedFundsImmediately.jpeg?raw=1"
              />
            </div>{" "}
            <br />
            "Need funds immediately." NO YOU DON'T you need to adjunicate
            finance, insurance-by-duress, rentier-colonism & involuntary trade
            now
            <br />
            <br />
            "Leverage things" of donors or settled-market price, not equity.
            That's illegal. It is not a matter of time. Naturally debt:cash is
            1:1depositary in 1908, now is 41:1
          </div>
          <Cable
            style={{ width: "100%", height: "560px" }}
            onError={handleScollImgError}
            src={
              this.state.nofred
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=J6zW&width=670&height=475`
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=J6zW"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <a
            href="https://saverparty.xyz"
            style={{
              position: "relative"
            }}
          >
            <img
              style={{ width: "90%", maxWidth: "800px" }}
              src="https://www.dropbox.com/s/ohyyc9wensqjmar/interest%20dead%20weight%20%282%29.png?raw=1"
              alt="interest dead-weight by equity-bid supply and demand"
            />
          </a>
          <br />
          <br />
          People are dying; my _ considers death
          <br />
          <span>
            Your debts are mine if I buy from you, and that money you promised
            is not yours to promise.&nbsp;&nbsp;
            <b>
              How can I get us out of debt when there is $82t:$7t
              [actually&nbsp;
              <a href="https://fred.stlouisfed.org/series/CURRSL">
                currencyComponentOfM1
              </a>
              &nbsp;is $2t of $7t, $5t is&nbsp;
              <a href="https://fred.stlouisfed.org/series/M1SL">
                M1 savings valuation
              </a>
              &nbsp;, M2 is&nbsp;
              <a href="https://fred.stlouisfed.org/series/M1SL">$19t</a>&nbsp;is
              valuation of last traded savings accounts as well, or $7t when "
              <a href="https://fred.stlouisfed.org/series/M2REAL">deflated</a>
              &nbsp;with cpi" which doesn't include the greatest inflation in
              housing nor in price-inelasticity of $82/$2t (4100% vs 102%)]
              <br />
              2021
            </b>
          </span>
          <br />
          <h1>Micro-Theory</h1>
          <h2>Platitudes</h2>
          <br />
          <div style={{ display: "block", flexDirection: "column" }}>
            Only if you are [ "late on your business-line{" "}
            <span
              style={{
                textDecoration: "line-through"
              }}
            >
              or collateralized debt
            </span>
            , and the lender tacks on more than they estimated they would need
            to take on this risk forever (depreciation-no-give-backsies)",
            "scalping markets with no utility in assets or cash"] are you
            usurping a time-based payout schedule or trade
            <br />
            Productivity as measured by gdp is incorrect since it is mostly debt
            by evidence of v1 being derived from a gdp number of m2*v2.
            Productivity should be measured by benefit to cost, which cannot be
            encapsulated by a benefit that is a cost
            <br />
            They are colluding with finance (11x wealth only 2% of population)
            giving it to people who have debt to bail out $82t of usurped debt
            cornering assets by promising other people's money which is only
            $6t, they do not want to adjudicate, they just want to split
            dollar-equity without consent
            <br />
            If insurance companies are a net loss because they pay invoices
            instead of rollover gift certificates, can ALL insurance companies
            keep saying they save people money if the part that they can never
            say in unison is that they save people money only relatively??
            <br />
            <b>
              <i>We still live in colonialism </i>
            </b>
            <br />
            <i>at each market-level </i>
          </div>
          <br />
          <span>
            <b>
              <i>Regulators can only </i>
            </b>
            certify because they have been wrong before about tobacco and
            methane fires in crowded theatres are invisible
          </span>
          <span>
            <b>
              <i>national security is</i>
            </b>{" "}
            really bondholder security, we would do better after emancipation
            and no more slavery. insurrection against slaveowners is ok
          </span>
          time is a snapshot of facts, facts don't change from time but by
          voluntary trade or else it breaks A13
          <br />
          voluntary by no duress or alterior uneccesary, hidden or unknowable
          harm or by literally people colluding together about your money being
          theirs and they reap the benefits of using the collateral now... which
          is all that matters and the money the seller gets and is now
          instilling a cost only they can pay in full and more from another
          saver in the borrowers' customers
          <span>
            <b>
              borrowing with my money itelf as a lender or assuming it as a
              consumer is counterfeit not of copyright which should never be
              patent by mafia pay-off but of not your property to wager, your
              payment scedule collusion with seller, lender and borrower assumes
              you'll get my market-share, which should be vault-share, which is
              all currency really is. a gift certificates that rollover at the
              depreciation of the item in storage
            </b>
            , I now have to wait for you to get the money back from the lender
            or seller before I can get the depreciated asset
          </span>
          <br />
          <span>
            <b>
              <i>GDP is </i>
            </b>
            debt by a fabricated v1 from gdp/m1 where gdp from m2v2
          </span>
          <br />
          <span>
            <b>
              <i>Rent is </i>
            </b>
            the prohibition of trade thru which to benefit from more than how
            much they could possibly benefit in reality by owning the place, and
            not trespassing at one time ({">"}1mo) (1/5)
          </span>
          <br />
          <span>
            <b>
              <i>
                Debt, invoices & insurance brokering gift cards & expiring gift
                certificates are{" "}
              </i>
            </b>
            to price-fix & monopolize the Demand curve & leverage other peoples'
            autonomy in principal & interest, or the sellers' equity in
            principal & other peoples' autonomy in interest
          </span>
          <br />
          <span>
            <b>
              <i>Tax is </i>
            </b>
            theft by not being paid by those using services that cannot be a la
            carte (voluntary)
          </span>
          <br />
          <span>
            <b>
              <i>Slavery is </i>
            </b>
            an impossible contract, theft or indentured servitude that which is
            not able to work out of without others' benefits at your disposal
          </span>
          <br />
          <span>
            <b>
              <i>Lending is </i>
            </b>
            a conspiracy to price-fix and corner assets with a borrower using
            someone else's money as a valuation metric
          </span>
          <br />
          <a
            href="https://Vaults.biz"
            style={{
              fontSize: "30px",
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "76px",
              backgroundColor: "rgb(20,20,25)",
              color: "rgb(200,200,220)"
            }}
          >
            Vaults.biz
          </a>
          <br />
          <span>
            or be able to pay but{" "}
            <b>
              not get paid due to preferences; or receive services due to
              impairment, only under duress or by your own interpretation of
              their benefit and cost
            </b>
            <br />- government or business may only certify advice to a standard
            unless your actions affect another by disclusion, duress or opinion
            of their actions or opinions. Not sharing health data or getting
            tagged with a graft to be included precludes any right to stop
            people from doing anything based on health, preference or bodily
            composition unless it is apparent, symptomatic or unanimously
            deduced
            <br />
            <b>
              you have to prove that what I believe is not true to make me stop
              saying it and I would have to prove something to make you have to
              repair the situation within your means
            </b>
            as long as it is not If they know this they should be able to find
            the attendees beforehand. Sounds like a con. Stop selling
            bonds/promising savers’ money at 11x more than we have to enemies
            for price-fixed cornering of assets please. bio on each guy and put
            them on the parole intranet
            <br />
            <div
              style={{
                border: "1px solid",
                margin: "10px"
              }}
            >
              A derivative cannot be a constant since apples are not oranges of
              differing, but the same units. #calculus Integral function is how
              constants observed (never adequate, random is as random does)
              predict future occurrences (which can be endless). #firstamendment
              Methane fires in a crowded theatre like debt or a percolating
              insurance-abetting invoice bill now you charge your customers
              rather when they choose you and you don't corner assets with your
              lender by not giving any utility but using a bug{" "}
              {`(()=>{servitude:()=>capturing saver’s money + either (a) being a government employee + this(); or (b)(1) LENDER pay BORROWER, (2) BORROWER pay LENDER 14%APR or this()})`}
              , can cause invisible or misunderstood harm as is lying or
              trusting that gov-sanctioned tobacco is healthy. Inclusion is an
              issue of A13 & A14 to give but not take, not A1; discovery of what
              we can garner as facts from comprehensive data and viewpoints
              discussing with an intent to settle and without malintent or
              usurping other's rights is an issue of A1 #criminallaw
              #criminalintent #intention #whitecollarcrime #finance #consumerlaw
              #accounting #securitieslitigation #securitiesregulation
              #nationalsecurity of secession is not of foreign bond-holder aid
              and comfort
            </div>
            <br />
            <b>
              A1 is only for laws, well then you can turn people away from your
              business based on arousal-orientation?
            </b>{" "}
            Freedom of orientation is protected by A14 and Civil Rights Act,
            also A13 if you do not want to instigate slavery of allowing them to
            give but not take in the economy. Especially if there are few
            providers or you want to be protected from what people say
            <br />
            <b>privacy is required for free expression</b> Freedom of
            arousal-orientation, whatever makes you happy is protected by A14
            and Civil Rights Act, also A13 if you do not want to instigate
            slavery of allowing them to give but not take in the economy.
            <br />
            <div
              style={{
                border: "1px solid",
                margin: "10px"
              }}
            >
              <b>
                supreme court saying nazi could walk chicago <i>is wrong</i>
              </b>{" "}
              because there is probable-evidence-of-evidence of motive to do
              them harm physically or financially (not valuation but tangible
              losses) neighborhood law is like the sea law but between homes,
              that's why open-carry is also an exhibited threat
            </div>
          </span>
          <span>
            or earning other people’s money (debt is the only bet that you can
            wager someone else’s money)
          </span>
          <br />
          <h2>Strategy-Comparison to Macroeconomics</h2>
          <br />
          <span>
            <b>
              <i>Analysis by logic of markets-at-scale, </i>
            </b>
            not numbers by bets beyond escrow & involving others' marginal
            benefits or utility expended as cost
          </span>
          <br />
          <h2>Alternative Investing Models</h2>
          <br />
          <span>
            <b>
              <i>Customer borrowing, at a fixed- or max-profit price, </i>
            </b>
            although is not promising money that isn’t theirs like in interest
            or time, it is price-fixing as a business can wait for customers to
            deliver return, while an individual will have to charge their
            patrons to have enough to buy food, health & shelter & the partner
            (really colonizer in this situation)
            {/**
        (1) due to adding no competitor to raise quality of
        life, just price, whose effect without benefit competitively is still
        passing the burden on their customers,, (3) Prohibits
        other people from trading the settled price not as a partnership to make
        a product better at a settled price, but a customer max-profit royalty
        if there is the ability to
        foreclose it is not settled (2)
        */}
          </span>
          <a
            href="https://NationalSecurityCasino.com"
            style={{
              fontSize: "30px",
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "76px",
              backgroundColor: "white",
              color: "black"
            }}
          >
            NationalSecurityCasino.com
          </a>
          <a
            href="https://SaverParty.xyz"
            style={{
              fontSize: "30px",
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "76px",
              backgroundColor: "#a64d79ff",
              color: "rgb(230,230,230)"
            }}
          >
            SaverParty.xyz
          </a>
          <a
            href="https://Froth.app"
            style={{
              fontSize: "30px",
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "76px",
              backgroundColor: "#04060aff",
              color: "#edeac1ef"
            }}
          >
            Froth.app
          </a>
          <span>
            <br />
            <b>
              <i>
                Wealth is your assets relative to demand need, which may be as
                valuable as toilet paper or colonialism{" "}
              </i>
            </b>
            <b>
              If the government is giving aid and comfort to China by way of
              instigating savers into involuntary servitude and having the
              market’s assets cornered by no utility gained just price-fixing
              imagination of a resolution of this infinite promise{" "}
              {`(()=>{servitude:()=>capturing saver’s money + either (a) being a government employee + this(); or (b)(1) LENDER pay BORROWER, (2) BORROWER pay LENDER 14%APR or this()})()`}
            </b>{" "}
            <br />
            price-fixing is when you place the ask and the bid by oligopoly or
            otherwise... what, you are only cooperating when you have a funny
            name?
            <br /> in the name of · ·
            <br />
            promising more than you can pay; insurance that doesn't rollover
            (not subs because they promise no more than what you use/ do not
            give more to others in the pool or their customers or tort
            prosecutors) or is unsettled by invoice to buy is counterfeit
            <br />
            of reality and facts right now in the ground the assumptions of
            other's for future and past only exist in the claimant's head
            <br /> Lettin people profit from bugs being used rather than useful
            things is intentful harm being done to other people they sign up
            under duress or those who those people sell to. wagering dollars as
            comparative as shareholder rights or counterfeit being mixed in
            supply or achieving a purchase is; or copyright over patents.
            invoices are theft; debt interest per time, or on customers, is too
            per price or compound on their customers required, unrequited...
            <br />
            <br />
          </span>
        </div>
        <h1 ref={this.podcast}>
          <iframe
            title="Advanced Microeconomics: The Micro-Theory.com Podcast"
            src="https://embed.podcasts.apple.com/us/podcast/advanced-microeconomics-the-micro-theory-com-podcast/id1629354788?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
            height="450px"
            frameborder="0"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *; clipboard-write"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              borderRadius: "10px",
              background: "transparent"
            }}
          ></iframe>
        </h1>
        <a href="https://micro-theory.com/p/intro.mp3">
          <h3>Intro</h3>
          What is microeconomics?
        </a>
        <a href="https://micro-theory.com/p/the-reason-for-microeconomics.mp3">
          <h3>The Reason for Microeconomics,</h3>a saving grace of bleeding
          heart Americans
        </a>
        <a href="https://podcasts.apple.com/us/podcast/advanced-microeconomics-the-micro-theory-com-podcast-microeconomics-for-macroeconomists-and-laymen/id1629354788">
          Advanced Microeconomics: The Micro-Theory.com Podcast, Microeconomics
          for Macroeconomists and Laymen
        </a>
      </div>
    );
  }
}
