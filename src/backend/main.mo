import Map "mo:core/Map";
import Nat64 "mo:core/Nat64";
import Runtime "mo:core/Runtime";

actor {
  type Prediction = {
    team1 : Text;
    team2 : Text;
    matchDate : Nat64;
    predictedWinner : Text;
    confidenceLevel : Nat;
  };

  let predictions = Map.empty<Nat, Prediction>();
  var nextId = 0;

  public shared ({ caller }) func addPrediction(team1 : Text, team2 : Text, matchDate : Nat64, predictedWinner : Text, confidenceLevel : Nat) : async Nat {
    let prediction : Prediction = {
      team1;
      team2;
      matchDate;
      predictedWinner;
      confidenceLevel;
    };
    let id = nextId;
    predictions.add(id, prediction);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getPrediction(id : Nat) : async Prediction {
    switch (predictions.get(id)) {
      case (null) { Runtime.trap("Prediction not found") };
      case (?prediction) { prediction };
    };
  };

  public query ({ caller }) func getAllPredictions() : async [Prediction] {
    predictions.values().toArray();
  };
};
