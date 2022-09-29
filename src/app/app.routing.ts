import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellModule } from './shell/shell.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ShellModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
