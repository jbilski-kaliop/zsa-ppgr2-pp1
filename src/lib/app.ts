import Action from "@/lib/actions/Action";
import { bindActionCallbackToButton } from "@/lib/dom";
import actions from "@/actions";

export default class App {
  run() {
    actions.forEach((action) => {
      this.bindActionToButton(action.btnId, action.callback);
    });
  }

  private bindActionToButton(btnId: string, callback: () => Action): void {
    bindActionCallbackToButton(btnId, () => {
      const action = callback();
      if (action instanceof Action) {
        action.execute();
      }
    });
  }
}
