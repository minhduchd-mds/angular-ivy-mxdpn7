import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full', 
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginModule' 
  }
];