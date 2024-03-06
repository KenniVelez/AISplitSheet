class MusicSplitSheet:
    def __init__(self, song_title, song_artists, percentages):
        self.song_title = song_title
        self.song_artists = song_artists
        self.percentages = percentages

    def generate_split_sheet(self):
        split_sheet = f"Song Title: {self.song_title}\n\nArtists:\n"
        for artist, percentage in zip(self.song_artists, self.percentages):
            split_sheet += f"- {artist}: {percentage}%\n"
        return split_sheet

def main():
    # Example usage
    song_title = "Example Song"
    song_artists = ["Artist 1", "Artist 2", "Artist 3"]
    percentages = [30, 40, 30]

    split_sheet = MusicSplitSheet(song_title, song_artists, percentages)
    generated_sheet = split_sheet.generate_split_sheet()
    print(generated_sheet)

if __name__ == "__main__":
    main()
