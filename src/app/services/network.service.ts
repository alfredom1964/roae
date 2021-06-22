import { Injectable, OnDestroy } from "@angular/core";
import { Network } from "@ionic-native/network/ngx";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NetworkService implements OnDestroy {
  networkConnection$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private network: Network) {}

  listenNetworkChanges() {
    console.log("Will listen to network changes!");
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.networkConnection$.next(false);
    });
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        // console.log("Network type", this.network.type);
        // if (this.network.type === "wifi") {
          this.networkConnection$.next(true);
        // }
      }, 3000);
    });
  }

  disconnectSubscription: Subscription;
  connectSubscription: Subscription;

  ngOnDestroy() {
    this.disconnectSubscription.unsubscribe();
    this.connectSubscription.unsubscribe();
  }
}
