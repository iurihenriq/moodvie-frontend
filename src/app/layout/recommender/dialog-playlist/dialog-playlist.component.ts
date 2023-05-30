import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-dialog-playlist',
  templateUrl: './dialog-playlist.component.html',
  styleUrls: ['./dialog-playlist.component.scss'],
})
export class DialogPlaylistComponent implements OnInit {
  playlistForm!: FormGroup;
  showCreatePlaylist: boolean = false;

  playlists: { name: string, value: string, checked: boolean }[] = [
    { name: "Playlist 1", value: "p1", checked: false },
    { name: "Playlist 2", value: "p2", checked: false },
    { name: "Playlist 3", value: "p3", checked: false },
    { name: "Playlist 4", value: "p4", checked: false }
  ];
  myControl = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) mood: string
  ) {
    // this.mood = mood.toLocaleLowerCase();
  }

  ngOnInit() {
    this.playlistForm = this.formBuilder.group({
      selectedPlaylist: null
    });
  }
  selectPlaylist(playlist: { name: string, value: string, checked: boolean }) {
    this.playlists.forEach(p => p.checked = false); // Desmarca todos os checkboxes
    this.showCreatePlaylist = false

    playlist.checked = true; // Marca apenas o checkbox selecionado
    this.playlistForm.patchValue({
      selectedPlaylist: playlist.value
    });
    console.log(this.playlistForm.value)
  }
  showNewPlaylist() {
    this.playlists.forEach(p => p.checked = false);
    this.showCreatePlaylist = true
  }

}
