import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './standalone-components/header/header.component';
import { Video } from './interfaces/video.interface';
import { MainFrameComponent } from './standalone-components/main-frame/main-frame.component';
import { MobileNavComponent } from './standalone-components/mobile-nav/mobile-nav.component';
import { CommonModule } from '@angular/common';
import { ArchAiLayoutComponent } from './standalone-components/arch-ai-layout/arch-ai-layout.component';
import { FormOutputComponent } from './standalone-components/layout/form-output/form-output.component';
import { FooterComponent } from './standalone-components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainFrameComponent, MobileNavComponent, CommonModule, ArchAiLayoutComponent, FormOutputComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMobileShow: boolean = false
  isOutputShow: boolean = false
  onClicked(ev: boolean) {
    this.isMobileShow = ev
    console.log(this.isMobileShow)
  }

  onSubmitted() {
    this.isOutputShow = true
    console.log("isoutput is")
    console.log(this.isOutputShow)
  }
}
