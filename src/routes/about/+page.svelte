<script lang="ts">
  import { resolve } from "$app/paths";

  import nafLogo from "$lib/assets/new_alexandria_foundation_logo.png";
  import titlePageImage from "$lib/assets/pausanias-title-page.jpg";

  import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div class="bg-white dark:bg-gray-900">
  <main>
    <!-- Hero section -->
    <div class="relative isolate overflow-hidden bg-white dark:bg-gray-900">
      <div
        aria-hidden="true"
        class="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
          class="aspect-1108/632 w-277 bg-linear-to-r from-[#fff580] to-[#e59f46] opacity-20"
        ></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <main class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8 prose p-8 w-full">
          <img src={nafLogo} alt="New Alexandria Foundation" class="h-11" />
          <h1 class="mt-10 font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
            A Pausanias Reader in Progress
          </h1>
          <article>
            <small>
              <p>
                An ongoing retranslation of the Greek text of Pausanias, with ongoing annotations,
                primarily by Gregory Nagy from 2014 to 2022, and continued since 2022 by Nagy
                together with an intergenerational team.
              </p>
            </small>

            <section>
              <h2>Introductory Remarks by Gregory Nagy 2022</h2>
              <p>
                I restart what I had described as an ongoing project in a posting for Classical
                Inquiries (Nagy 2020.08.07):
                https://classical-inquiries.chs.harvard.edu/ongoing-comments-on-a-pausanias-reader-in-progress/.
                My description there, in the introduction to that post, is by now out of date. My
                description here presents a new idea about the ongoing project as I had described it
                there. Having found for it a new home in Classical Continuum, I have merged a
                restarted version of A Pausanias Commentary in Progress, which I had abbreviated as
                APCIP, with a restarted version of A Pausanias Reader in Progress, abbreviated as
                APRIP. In the new Reader, my ongoing commentary, in the form of annotations, has
                been combined with my long-term ongoing project of retranslating all ten scrolls of
                the Greek text of Pausanias wherever I think that updating is needed for the
                original translation by W. H. S. Jones, 1918 (Scroll 2 translated by Jones together
                with H. A. Ormerod). Starting in 2022, my annotations will be enhanced by other
                contributors of content. In the case of each new contribution, including mine, the
                contributor’s name and the date of writing will be indicated.
              </p>
            </section>

            <section>
              <h2>Funding</h2>
              <p>
                This project was generously funded by a grant from the <a
                  href="https://research.fas.harvard.edu/deans-competitive-fund-promising-scholarship"
                  title="Dean's Fund for Promising Scholarship"
                  aria-label="Dean's Fund for Promising Scholarship"
                  >Dean's Fund for Promising Scholarship</a
                > in the Faculty of Arts and Sciences at Harvard University.
              </p>
            </section>

            <section>
              <h2>Special Thanks</h2>
              <p>
                We would especially like to thank Professor Claudine Gay, who as the Edgerley Family
                Dean of the Faculty of Arts and Sciences first recognized the potential of this
                project.
              </p>

              <p>
                We would also like to thank Anna Foka, Elton Barker, Brady Kiesling, and the rest of
                the <a href="https://www.periegesis.org/" aria-label="Digital Periegesis">
                  Digital Periegesis</a
                > team for allowing us to use their data for tagged persons and places.
              </p>

              <p>
                Their project, &lapos;Time and People in Pausanias’s <em>Description of Greece</em
                >&rapos; was funded in part by a Swedish research council grant (Vetenskapsrådet
                project no: 2021-02799).
              </p>

              <p>
                Additionally, we would like to thank Chiara Palladino and Tariq Yousef for their
                support using their named entity classification model. Named entity classification
                was performed using the <a
                  href="https://huggingface.co/UGARIT/flair_grc_bert_ner"
                  aria-label="UGARIT/flair_grc_bert_ner">UGARIT/flair_grc_bert_ner</a
                > model published on HuggingFace.
              </p>

              <p>
                Special thanks are also due to Leonard Muellner and Noel Spencer, ποιμένες ἔργων.
              </p>
            </section>

            <section>
              <h2>Credits</h2>
              <p>
                Based on an original translation by W. H. S. Jones, 1918 (Scroll 2 with H. A.
                Ormerod), containing some of the footnotes added by Jones.
              </p>

              <ul>
                <li>Editors: Keith DeStone, Elizabeth Gipson, and Charles Pletcher</li>
                <li>Editor Emerita: Angelia Hanhardt</li>
                <li>Web Producer: Noel Spencer</li>
                <li>Image consultant: Jill Curry Robbins</li>
                <li>Software Developers: Luke Hollis, Hao Wu, and Charles Pletcher</li>
                <li>Editorial Interns: Joseph Foo and Kiesse Nanor</li>
              </ul>

              <p>
                To cite this work, use the following persistent identifier: <a
                  href="http://nrs.harvard.edu/urn-3:hlnc.prim-src:A_Pausanias_Reader_in_Progress.2018-"
                  >http://nrs.harvard.edu/urn-3:hlnc.prim-src:A_Pausanias_Reader_in_Progress.2018-.</a
                >.
              </p>

              <p>
                The software powering this application is licensed under the <a
                  href="https://mit-license.org"
                  title="MIT License"
                  aria-label="MIT License">MIT License</a
                >.
              </p>
            </section>
          </article>
        </main>
        <div
          class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
        >
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              width="2432"
              height="1442"
              src={titlePageImage}
              alt="Manuscript title page of Pausanias Periegesis"
              class="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="border-t border-gray-200 py-12 md:flex md:items-center md:justify-between dark:border-white/10"
    >
      <div class="flex justify-center gap-x-6 md:order-2">
        <a
          href="https://github.com/Open-Commentaries"
          class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <span class="sr-only">Open Source</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
        &copy; 2025 <a href="https://newalexandria.info">New Alexandria Foundation</a>
      </p>
    </div>
  </footer>
</div>
