import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { RouterLinkActive, RouterLinkWithHref, RouterModule } from '@angular/router'
import { PageNoteFoundComponent } from 'src/app/shared/components/page-note-found/page-note-found.component'

@NgModule({
  declarations: [NavigationComponent, PageNoteFoundComponent],
  exports: [NavigationComponent, PageNoteFoundComponent],
  imports: [CommonModule, RouterLinkActive, RouterLinkWithHref, RouterModule],
})
export class SharedModule {}
