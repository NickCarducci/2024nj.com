/*
 *	MetaCall Embedding NodeJS Example by Parra Studios
 *	An example of embedding NodeJS into C/C++.
 *
 *	Copyright (C) 2016 - 2020 Vicente Eduardo Ferrer Garcia <vic798@gmail.com>
 *
 *	Licensed under the Apache License, Version 2.0 (the "License");
 *	you may not use this file except in compliance with the License.
 *	You may obtain a copy of the License at
 *
 *		http://www.apache.org/licenses/LICENSE-2.0
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an "AS IS" BASIS,
 *	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the License for the specific language governing permissions and
 *	limitations under the License.
 *
 */
int main(int argc, char * argv[]) {
	struct metacall_log_stdio_type log_stdio = { stdout };

  printf(metacall_print_info());

  // Define log stream
  if (metacall_log(METACALL_LOG_STDIO, (void *) & log_stdio) != 0) {
    return cleanup(1);
  }

  // Initialize MetaCall
  if (metacall_initialize() != 0) {
    return cleanup(2);
  } 

    // Array of scripts to be loaded by MetaCall
  {
    const char * dependencies[] ={ "mastercard-places"};

    if (
      metacall_load_from_file("node",
      dependencies, sizeof(dependencies) / sizeof(dependencies[0]), NULL
      ) != 0
    ) {
      return cleanup(3);
    }

    if (sum(3, 4) != 0) {
      return cleanup(4);
    }
  }

  return cleanup(0);
}
//@vercel/ncc
//https://dev.to/peibolsang/how-vercel-is-changing-the-cloud-game-fme
//https://news.ycombinator.com/item?id=26586469
//https://github.com/vercel/ncc/blob/main/examples/hello-world/package.json