import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';

import {appReducer} from './app.reducer';
import {INITIAL_APP_STATE} from './app.state';
import {EffectsModule} from '@ngrx/effects';
import {SellerEffect} from './seller/seller.effect';
import {SellerService} from './seller/seller.service';
import {AuthEffect} from './auth/auth.effect';
import {AuthService} from './auth/auth.service';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({visible: true, position: 'right'})
  };
}

@NgModule({
  imports: [
    StoreModule.provideStore(appReducer, INITIAL_APP_STATE),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    EffectsModule.run(AuthEffect),
    EffectsModule.run(SellerEffect),
    StoreLogMonitorModule
  ],
  providers: [
    SellerService, AuthService
  ]
})
export class AppStoreModule {
}
