import React from "react";
import firebase from "./init-firebase.js";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  getDoc,
  updateDoc,
  setDoc,
  increment,
  query,
  where,
  deleteDoc
  //getDocs
} from "firebase/firestore";

const firestore = getFirestore(firebase);
export default class Petition extends React.Component {
  state = { middle: "", address: "", zip: "", city: "" };
  componentDidMount = () => {
    onSnapshot(doc(firestore, "countData", "only"), (doc) => {
      if (doc.exists()) {
        var foo = doc.data();
        foo.id = doc.id;
        this.setState({ signatures: foo.count });
      }
    });
    onSnapshot(collection(firestore, "signatures"), (snapshot) => {
      var posts = [];
      snapshot.docs.forEach((doc) => {
        if (doc.exists()) {
          var foo = doc.data();
          foo.id = doc.id;
          posts.push(foo);
        }
      });
      this.setState({ posts });
    });
    const cookieCount = collection(firestore, "cookieCount");

    onSnapshot(doc(cookieCount, "only"), (doc) => {
      if (doc.exists()) {
        this.setState({ cookieCount: doc.data().count });
      }
    });
    fetch("https://geolocation-db.com/json/")
      .then(async (res) => await res.json())
      .then((r) => {
        const IPv4 = r.IPv4;
        //console.log(IPv4);
        this.setState({ IPv4 }, () => {
          onSnapshot(
            doc(firestore, "cookies", IPv4),
            (doc) => {
              if (!doc.exists()) {
                console.log(IPv4, "cookie:", false);
                return this.setState({ cookied: false });
              }
              console.log(IPv4);
              this.setState({ cookied: true });
            },
            (e) => console.log(e.message)
          );
        });
      })
      .catch((err) => console.log(err.message));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.first !== "" &&
      this.state.last !== "" &&
      //this.state.address !== "" &&
      (this.state.city !== "" || this.state.zip !== "")
    ) {
      /*console.log("do");
      firebase
        .firestore()
        .collection("signatures")
        .where("first", "==", this.state.first)
        .where("middle", "==", this.state.middle)
        .where("last", "==", this.state.last)
        .where("address", "==", this.state.address)
        .where("city", "==", this.state.city)
        .where("zip", "==", this.state.zip)
        .get()
        .then((doc) => {
          if (doc.exists) {
            window.alert("you've signed! 🎉");
          } else {*/

      addDoc(collection(firestore, "signatures"), {
        first: this.state.first,
        middle: this.state.middle,
        last: this.state.last,
        address: this.state.address,
        city: this.state.city,
        zip: this.state.zip
      }).then(() => {
        this.setState({ finished: true });
        const counts = collection(firestore, "countData"); //signatures

        getDoc(doc(counts, "only"))
          .then((dc) => {
            if (dc.exists()) {
              updateDoc(doc(counts, "only"), {
                count: increment(1)
              });
            } else {
              setDoc(doc(counts, "only"), {
                count: increment(1)
              });
            }
          })
          .then(() => {
            window.alert("you've signed! 🎉");
            this.setState({ finished: true });
          })
          .catch((err) => {
            console.log(err.message);
            this.setState({ finished: true });
          });
      });
    } else
      return window.alert(
        "please complete required fields, all except middle name"
      );
  };
  nocookie = () => {
    const cookies = collection(getFirestore(firebase), "cookies");

    deleteDoc(doc(cookies, this.state.IPv4)) //, { cookied: false })
      .then(() => {
        this.setState({ cookied: false }, () => {
          window.alert("sorry to see you go! 🎉");
          const cookieCount = collection(firestore, "cookieCount");
          updateDoc(doc(cookieCount, "only"), {
            count: increment(-1)
          });
        });
      });
  };
  cookieplz = () => {
    const cookies = collection(getFirestore(firebase), "cookies");

    setDoc(doc(cookies, this.state.IPv4), { cookied: true })
      .then(() => {
        window.alert("you've been cookied! 🎉");
        this.setState({ cookied: true }, () => {
          const cookieCount = collection(firestore, "cookieCount");
          setDoc(doc(cookieCount, "only"), {
            count: increment(1)
          })
            .then(() => {
              console.log("cookie counted");
            })
            .catch((err) => {
              console.log(err.message);
            });
        });
      })
      .catch((err) => {
        console.log(err.message);
      }); //you can probe with a grammy but not an emmy nor nobel
  }; //elated bizarre messy hair 1/hour-GDP/p
  render() {
    const space = " ";
    return (
      <div
        ref={this.carducci}
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
        //href="https://carducci.us/primary"
        //I don't wanna wait, living on a prayer
      >
        <div
          style={{
            float: "left",
            fontSize: "12px",
            width: "max-content",
            color: "white",
            backgroundColor: "darkorchid",
            borderRadius: "12px",
            padding: "4px 10px",
            margin: "4px 0px"
          }}
        >
          Ballotpedia.org/Nick_Carducci
        </div>
        <h2 style={{ margin: "4px 0px" }}>
          {/*Where do you live, bitch?I will find you */}Are you a New Jersey
          voter?
        </h2>
        <b style={{ fontSize: "12px" }}>
          <a href="https://scopes.cc" style={{ color: "black" }}>
            Information insurance
          </a>
          <br />
          (Save the rats!)
          {/*}, plaintiff tax Warranty*/}
        </b>
        <div
          style={{
            justifyContent: "space-between",
            display: "none",
            backgroundColor: "black",
            padding: "10px"
          }}
        >
          <span
            style={{
              color: "lightgrey"
            }}
          >
            <a
              style={{
                color: "white"
              }}
              href="https://occupywall.us"
            >
              OccupyWall.us
            </a>
            {space}&bull;{space}Work at 9 (
            <a
              style={{
                color: "grey"
              }}
              href="https://commie.dev/work"
            >
              years old
            </a>
            )
          </span>
          {
            this.state.cookied === undefined ? (
              <div style={{ color: "white", display: "flex" }}>loading</div>
            ) : (
              <div
                onClick={!this.state.cookied ? this.cookieplz : this.nocookie}
                style={{ color: "white", display: "flex" }}
              >
                {this.state.cookieCount}
                &nbsp;&nbsp;
                <div
                  style={{
                    border: `${!this.state.cookied ? 1 : 0}px dotted grey`,
                    color: "white",
                    display: "flex"
                  }}
                >
                  {this.state.cookied
                    ? "thanks you! you ARE strategically significant!"
                    : "if you just want a cookie"}
                  {/*why is your cookie better than mine */}
                  <div
                    style={{
                      cursor: "pointer",
                      border: `${this.state.cookied ? 1 : 0}px solid`,
                      color: "white",
                      backgroundColor: !this.state.cookied ? "green" : ""
                    }}
                  >
                    ✓
                  </div>
                </div>
              </div>
            )
            //TaxSecurityFirst Risk-Free
          }
        </div>
        Do right-to-try laws permit holds or bar and sunlight trade secrets for
        hush money payments to non-disclosure agreements?
        <h1>PlaintiffRecessionTax.com for Depositary Banking</h1>
        <h2>Submit your signature! {this.state.signatures}/800</h2>
        {/*Do you want banks that don’t force you to invest?{" "}
        <i>
          Why should a product be closed source to have a fair end user license
          agreement?
                </i>*/}
        {this.state.finished ? (
          <div>
            <h2>Thank you! keep in touch:</h2>
            <h3>sayists@icloud.com</h3>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              required={true}
              style={{ width: "110px" }}
              onChange={(e) => this.setState({ first: e.target.value })}
              placeholder="first name"
            />
            <input
              style={{ width: "100px" }}
              onChange={(e) => this.setState({ middle: e.target.value })}
              placeholder="middle name"
            />
            <input
              required={true}
              style={{ width: "100px" }}
              onChange={(e) => this.setState({ last: e.target.value })}
              placeholder="last name"
            />
            <br />
            <input
              style={{ width: "120px" }}
              onChange={(e) => this.setState({ address: e.target.value })}
              placeholder="address (optional)"
            />
            <input
              required={true}
              style={{ width: "100px" }}
              onChange={(e) => {
                const entry = e.target.value;
                const numberEntry = Number(entry);
                const isNumber = !isNaN(numberEntry);
                this.setState({
                  [isNumber ? "zip" : "city"]: entry
                }); //young and just see what's next (for the programs uh parts)
              }}
              placeholder="city or zip"
            />
            &nbsp;
            <span style={{ fontSize: "12px" }}>
              You put your name to represent your electronic signature to
              petition Independent ballot candidate.{space}
              <button type="submit">submit</button>
              {space}
              <span style={{ color: "darkslategrey" }}>
                This provisional signature to get on US Senate ballot in 2024
                for 2025 will be contestable{space}
                <i>
                  if
                  {space}
                  <span style={{ color: "grey" }}>
                    voter identity is ambiguous{" "}
                    <a href="https://voter.svrs.nj.gov/registration-check">
                      https://voter.svrs.nj.gov/registration-check
                    </a>
                    .
                  </span>
                </i>
              </span>
            </span>
            {/*<div style={{ color: "grey", fontSize: "10px" }}>
                this is on firebase but only shows you signed if you enter the
                same info...
            </div>*/}
          </form>
        )}
      </div>
    );
  }
}
