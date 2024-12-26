import {
  ChangeDetectionStrategy,
  ElementRef,
  Component,
  viewChild,
  effect,
  signal,
  inject,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import * as confetti from 'canvas-confetti';
import DiceBox from '@3d-dice/dice-box';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './initiative-dice-modal.component.html',
  standalone: false,
})
export class InitiativeDiceModalComponent {
  private readonly _dialogConfig = inject(DynamicDialogConfig);
  private readonly _dialogRef = inject(DynamicDialogRef);

  private readonly _diceBoxRef = signal<typeof DiceBox | null>(null);
  private readonly _trayRef = viewChild<ElementRef>('tray');

  constructor() {
    this._dialogConfig.focusOnShow = false;
    this._dialogConfig.styleClass = 'pt-6';
    this._dialogConfig.showHeader = false;
  }

  public readonly trayEffect = effect(() => {
    if (this._trayRef() && !this._diceBoxRef()) {
      const diceBox = new DiceBox({
        themeColor: '#968e37',
        assetPath: '/assets/',
        container: '#tray',
        theme: 'smooth',
        gravity: 12,
        scale: 30,
      });

      diceBox.init();
      diceBox.onThemeLoaded = (): void => this._rollDice();
      diceBox.onRollComplete = (
        result: Record<number, { value: number }>,
      ): void => {
        this._closeWithResult(result[0].value);
        this._runConfetti();
      };

      this._diceBoxRef.set(diceBox);
    }
  });

  private _rollDice(): void {
    this._diceBoxRef()?.roll('1d10');
  }

  private _runConfetti(): void {
    const confettiDefaults = {
      colors: ['968e37', 'f9f1cb', '2c2600', '999265', 'afab99'],
      startVelocity: 20,
      zIndex: 10000,
      spread: 360,
      decay: 0.94,
      gravity: 0,
      ticks: 30,
    };

    confetti.default({
      ...confettiDefaults,
      particleCount: 40,
      shapes: ['star'],
      scalar: 1.2,
    });
    confetti.default({
      ...confettiDefaults,
      shapes: ['circle'],
      particleCount: 20,
      scalar: 0.75,
    });
  }

  private _closeWithResult(result: number): void {
    setTimeout(() => this._dialogRef.close(result || 10), 1000);
  }
}
