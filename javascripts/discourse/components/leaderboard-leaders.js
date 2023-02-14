import Component from "@glimmer/component";
import { ajax } from "discourse/lib/ajax";
import { tracked } from "@glimmer/tracking";

export default class LeaderboardLeaders extends Component {
  @tracked leaderboardLeaders = null;

  constructor() {
    super(...arguments);

    const count = this.args?.params?.count || 5;

    ajax(`/leaderboard`).then((data) => {
      this.leaderboardLeaders = data.users.slice(0, count);
    });
  }

  willDestroy() {
    this.leaderboardLeaders = null;
  }
}
